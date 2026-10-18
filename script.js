/* ==========================================================================
   SCRIPT.JS
   Faz quatro coisas, de propósito, e mais nenhuma:
   1. Entrada suave dos títulos ao fazer scroll (um único efeito, desligado se o
      visitante pediu menos movimento).
   2. Abrir e fechar a navegação em telemóvel.
   3. Carregar o mapa do Google só quando o visitante clica no botão (privacidade).
   4. Desenhar a ementa (página menu.html) a partir do ficheiro ementa-dados.js.
   Não há analítica, cookies nem efeitos de cursor.
   ========================================================================== */

(function () {
  "use strict";

  // Marca o documento como "com JS" para o CSS poder esconder/mostrar elementos.
  // Se o JS falhar, os títulos e a navegação continuam visíveis.
  document.documentElement.classList.add("js");

  /* ---------- 1. Entrada suave dos títulos ---------- */
  var elementos = document.querySelectorAll(".reveal");
  var reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduzir) {
    elementos.forEach(function (el) { el.classList.add("visivel"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.2 });
    elementos.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- 2. Navegação em telemóvel ---------- */
  var nav = document.getElementById("nav");
  var botaoNav = document.querySelector(".nav-botao");

  if (nav && botaoNav) {
    var abrirNav = function (abrir) {
      nav.classList.toggle("aberto", abrir);
      botaoNav.setAttribute("aria-expanded", abrir ? "true" : "false");
      botaoNav.setAttribute("aria-label", abrir ? "Fechar navegação" : "Abrir navegação");
    };

    botaoNav.addEventListener("click", function () {
      abrirNav(botaoNav.getAttribute("aria-expanded") !== "true");
    });

    // Fecha ao escolher uma ligação, ao carregar fora do cabeçalho ou com a tecla Esc.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { abrirNav(false); }
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".cabecalho")) { abrirNav(false); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && botaoNav.getAttribute("aria-expanded") === "true") {
        abrirNav(false);
        botaoNav.focus();
      }
    });
  }

  /* ---------- 3. Mapa só ao clicar ---------- */
  var mapa = document.getElementById("mapa");
  var botao = document.getElementById("mapa-botao");

  if (mapa && botao) {
    botao.addEventListener("click", function () {
      var url = mapa.getAttribute("data-mapa");
      if (!url || url.indexOf("[") !== -1) { return; } // ainda não foi preenchido
      var iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.title = "Mapa com a localização do Arabesco";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      mapa.innerHTML = "";
      mapa.classList.add("mapa--ativo");
      mapa.appendChild(iframe);
    });
  }

  /* ---------- 4. Ementa (só na página menu.html) ----------
     Os pratos e os preços vêm de ementa-dados.js (window.EMENTA). */
  var lista = document.getElementById("ementa-lista");

  if (lista) {
    // Cria um elemento com classe e texto. O texto entra sempre como texto, nunca como HTML.
    var criar = function (etiqueta, classe, texto) {
      var el = document.createElement(etiqueta);
      if (classe) { el.className = classe; }
      if (texto) { el.textContent = texto; }
      return el;
    };

    // 10.5 -> "10,50 €" (com espaço sem quebra antes do euro)
    var euros = function (n) {
      return n.toFixed(2).replace(".", ",") + " €";
    };

    var TAMANHOS = [
      { chave: "mini", rotulo: "Mini" },
      { chave: "meia", rotulo: "½ dose" },
      { chave: "dose", rotulo: "Dose" }
    ];

    var dados = window.EMENTA;

    if (!dados || !dados.grupos || !dados.grupos.length) {
      lista.textContent = "";
      lista.appendChild(criar("p", "ementa__aviso", "Não foi possível mostrar a ementa. Ligue 217 783 344 para saber o que há hoje."));
    } else {
      lista.textContent = "";

      // Data da lista, por baixo do texto de introdução
      var data = document.getElementById("ementa-data");
      if (data && dados.data) { data.textContent = "Lista de " + dados.data + "."; }

      dados.grupos.forEach(function (grupo, i) {
        var bloco = criar("section", "ementa__bloco");
        var idTitulo = "ementa-grupo-" + i;
        bloco.setAttribute("aria-labelledby", idTitulo);

        var titulo = criar("h2", "", grupo.titulo);
        titulo.id = idTitulo;
        bloco.appendChild(titulo);

        // Cabeçalho das colunas só quando o grupo tem tamanhos (a sopa não tem)
        var temTamanhos = grupo.pratos.some(function (p) {
          return TAMANHOS.some(function (t) { return typeof p.precos[t.chave] === "number"; });
        });
        if (temTamanhos) {
          var colunas = criar("div", "ementa__colunas");
          colunas.setAttribute("aria-hidden", "true");
          colunas.appendChild(criar("span"));
          TAMANHOS.forEach(function (t) { colunas.appendChild(criar("span", "", t.rotulo)); });
          bloco.appendChild(colunas);
        }

        var ul = criar("ul", "pratos");
        grupo.pratos.forEach(function (prato) {
          var li = criar("li", "prato");
          li.appendChild(criar("p", "prato__nome", prato.nome));

          if (typeof prato.precos.unico === "number") {
            var unico = criar("p", "prato__preco prato__preco--unico");
            unico.appendChild(criar("span", "so-leitor", "Preço: "));
            unico.appendChild(criar("span", "prato__valor", euros(prato.precos.unico)));
            li.appendChild(unico);
          } else {
            // Três colunas fixas; o que o prato não tem fica em branco para manter o alinhamento
            TAMANHOS.forEach(function (t) {
              var preco = criar("p", "prato__preco");
              if (typeof prato.precos[t.chave] === "number") {
                preco.appendChild(criar("span", "prato__rotulo", t.rotulo));
                preco.appendChild(criar("span", "prato__valor", euros(prato.precos[t.chave])));
              }
              li.appendChild(preco);
            });
          }
          ul.appendChild(li);
        });
        bloco.appendChild(ul);
        lista.appendChild(bloco);
      });
    }
  }
})();
