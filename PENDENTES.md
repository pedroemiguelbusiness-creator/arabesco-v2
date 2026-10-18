# Pendentes do site Arabesco (v3)

O que falta confirmar com o cliente antes de publicar, e onde mudar no código quando houver resposta.
Os campos entre parênteses retos, como [NIF], só existem nas páginas legais (termos.html e privacidade.html).

## Bloqueiam a publicação

1. **Razão social, NIF e morada da sede.**
   Preencher [DESIGNAÇÃO LEGAL], [NIF] e [CONFIRMAR MORADA DA SEDE] em `termos.html` e `privacidade.html`,
   acrescentar a data em [DATA], apagar o aviso "Modelo base" e a linha `<meta name="robots" content="noindex">`.
   Acrescentar também a designação legal e o NIF no rodapé do `index.html`.
2. **Morada certa.** O Facebook e um diretório antigo dizem Estrada de Benfica, 294-B, 1500-098.
   O Google diz 294, 1500-075. O site usa 294-B, 1500-098.
   Se mudar: `index.html` (faixa, Como chegar, Contactos, JSON-LD, `data-mapa`), `termos.html`, `privacidade.html`.
3. **Fornecedor de alojamento do site.** Preencher [FORNECEDOR DE ALOJAMENTO DO SITE] na política de privacidade
   (e o contabilista ou software de faturação, se aplicável, senão apagar essa linha).
4. **Fotos com mais resolução.** As fotos atuais têm no máximo 680 px de largura e ficam macias em ecrãs grandes.
   Pedir originais com pelo menos 1600 px: fachada de dia, balcão com pessoas, pão e salgados, um prato do almoço.
   Substituir os ficheiros em `assets/` mantendo os nomes.

## Não bloqueiam, mas convém resolver

5. **"Casa fundada em 1968".** Só aparece dentro do logótipo (e no texto alternativo dele). Se o dono confirmar,
   acrescentar uma frase na secção "A casa" (há um comentário EDITAR no sítio) e `foundingDate` no JSON-LD.
6. **Pagamento.** As avaliações dizem coisas diferentes (uma diz Multibanco e dinheiro, outra diz só dinheiro).
   Quando o cliente confirmar, descomentar a linha "Pagamento" na secção Como chegar do `index.html`.
7. **Alergénios.** O texto da ementa pede ao cliente que avise antes de pedir. Confirmar que é assim que funciona
   e se existe a lista de alergénios por prato (Regulamento UE 1169/2011). Texto em `menu.html`.
8. **Livro de Reclamações Eletrónico.** Confirmar se a atividade está obrigada (ligação no rodapé) e qual a entidade
   de resolução de litígios (termos, ponto 6).
9. **Horários especiais.** Feriados e horário da cozinha ao almoço. Acrescentar em "Como chegar" quando houver resposta.
10. **WhatsApp.** O único número público é fixo (217 783 344), por isso o botão é "Ligar". Se houver telemóvel com
    WhatsApp, trocar o `href` da barra fixa por `https://wa.me/351XXXXXXXXX`.
11. **Email e Instagram.** Confirmar o email aarabesco81@gmail.com como contacto do site e se há Instagram.
12. **Autorização para as críticas.** Usar as três avaliações do Google com o nome do autor. Confirmar com o cliente.
13. **Ficha do Google Maps.** Não está reclamada pelo dono. Argumento forte para a reunião.
14. **Preços da montra.** Se o cliente quiser, acrescentar preços na lista "A montra" (dentro do `<dd>`).

## Depois de publicado

15. Acrescentar `url` e `image` ao JSON-LD e uma imagem `og:image` (endereços completos com https://).
16. **Fontes.** O site usa o Google Fonts (Instrument Serif e Hanken Grotesk), por isso a Google recebe o endereço IP
    do visitante. A política de privacidade já o diz. Para deixar de depender da Google, descarregar os ficheiros
    das duas fontes, pô-los em `assets/fontes/`, declará-los com `@font-face` no `style.css`, apagar as três linhas
    do Google Fonts de cada página HTML e retirar a frase correspondente da política de privacidade (pontos 5 e 6).
17. **Ementa diária.** Hoje atualiza-se em `ementa-dados.js`. Se o cliente não quiser editar um ficheiro todos os dias,
    pensar noutra solução (por exemplo, uma folha de cálculo partilhada).
