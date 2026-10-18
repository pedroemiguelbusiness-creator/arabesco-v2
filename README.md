# Arabesco, site (v3)

Site estático de uma página para a padaria, pastelaria e restaurante Arabesco, Estrada de Benfica, Lisboa.
HTML, CSS e JavaScript puros, sem frameworks e sem passo de build. Abre-se com duplo clique no `index.html`.

## O que há na pasta

| Ficheiro | Para que serve |
|---|---|
| `index.html` | Página principal (hero, montra, casa, opiniões, como chegar, contactos) |
| `menu.html` | Página da ementa. O nome mantém-se para os endereços já partilhados continuarem a funcionar |
| `ementa-dados.js` | **Os pratos e os preços do dia.** É aqui que se atualiza a ementa |
| `termos.html`, `privacidade.html` | Páginas legais (ainda com campos por preencher) |
| `style.css` | Todo o aspeto. Cores e fontes nas variáveis do topo |
| `script.js` | Navegação em telemóvel, mapa ao clicar, entrada dos títulos, desenho da ementa |
| `assets/` | Logótipos em SVG (fundo claro e escuro) e fotografias |
| `PENDENTES.md` | O que falta confirmar com o cliente e onde mudar |

## Como mudar as coisas mais comuns

- **Ementa e preços:** abrir `ementa-dados.js` e seguir as instruções no topo do ficheiro.
- **Horário:** mudar na faixa por baixo do hero e em "Como chegar" (`index.html`), no JSON-LD (bloco `<script type="application/ld+json">`)
  e nas duas descrições (`meta description` e `og:description`).
- **Telefone, morada, email:** procurar o valor antigo em `index.html` e substituir em todas as ocorrências.
- **Textos:** estão em texto simples dentro das etiquetas. Cada secção tem um comentário EDITAR.
- **Cores:** variáveis `--ouro`, `--castanho`, `--creme`... no início do `style.css`.

## Como publicar

Arrastar a pasta inteira para a Vercel ou para o Netlify (sem configuração), ou ativar o GitHub Pages no repositório.
Antes de publicar, resolver os pontos "Bloqueiam a publicação" do `PENDENTES.md`.

## Notas de design

- Em telemóvel o cabeçalho tem o nome e um botão de navegação. O contacto telefónico está na barra fixa no fundo do ecrã.
  Em ecrãs largos a navegação fica aberta e o botão "Ligar" está no cabeçalho.
- O mapa do Google só carrega depois de o visitante clicar em "Mostrar mapa".
- Sem JavaScript o site continua utilizável: a navegação fica visível e a página da ementa mostra o telefone.
- Sem cookies, sem analítica e sem efeitos de cursor. Há uma só animação suave, nos títulos das secções,
  desligada para quem pede menos movimento no sistema.
- As avaliações são reais, copiadas do Google Maps com o nome do autor. Não alterar o texto.
