/* ==========================================================================
   EMENTA-DADOS.JS  |  A ementa do dia vive aqui, num único sítio.
   A página menu.html lê este ficheiro e desenha a lista sozinha.

   COMO ATUALIZAR (todos os dias, se for preciso)
   1. Mudar a "data" para o dia da lista (formato dd/mm/aaaa).
   2. Para mudar um preço: alterar o número. Usar ponto, não vírgula (13.50, não 13,50).
      O site mostra-o sozinho como "13,50 €".
   3. Para tirar um prato: apagar a linha inteira { nome: ... },
   4. Para acrescentar um prato: copiar uma linha de um prato parecido, colá-la no grupo
      certo (Peixe, Carnes...) e mudar o nome e os preços.
   5. Cuidado com as vírgulas no fim de cada linha e com as aspas à volta dos textos.

   TAMANHOS POSSÍVEIS EM "precos" (usar só os que existem para o prato):
     mini  = mini dose      meia = meia dose      dose = dose inteira
     unico = prato com um só preço e sem tamanhos (ex.: a sopa)

   Para acrescentar um grupo novo (ex.: Sobremesas), copiar um bloco { titulo: ..., pratos: [ ... ] },
   e colá-lo na ordem em que deve aparecer.
   ========================================================================== */

window.EMENTA = {
  data: "18/10/2026",

  grupos: [
    {
      titulo: "Sopa",
      pratos: [
        { nome: "Sopa do dia", precos: { unico: 2.00 } },
      ],
    },

    {
      titulo: "Peixe",
      pratos: [
        { nome: "Bacalhau à Gomes de Sá",               precos: { mini: 10.50, meia: 13.50, dose: 16.90 } },
        { nome: "Petinga frita com açorda",             precos: { mini: 9.90,  meia: 11.90, dose: 16.90 } },
        { nome: "Peixe assado no forno com batatinhas", precos: { meia: 12.90 } },
        { nome: "Caras de bacalhau cozidas com todos",  precos: { meia: 11.90 } },
        { nome: "Dourada na grelha com legumes",        precos: { meia: 12.90 } },
      ],
    },

    {
      titulo: "Carnes",
      pratos: [
        { nome: "Vitela à Lafões",                              precos: { mini: 10.50, meia: 13.50, dose: 16.90 } },
        { nome: "Carne de porco à portuguesa",                  precos: { mini: 9.90,  meia: 11.90, dose: 16.90 } },
        { nome: "Panadinhos de peru com batata frita e maionese", precos: { mini: 10.00, meia: 12.90, dose: 16.90 } },
        { nome: "Salada de frango com maionese",                precos: { mini: 9.90,  meia: 11.90, dose: 16.90 } },
        { nome: "Coelho frito com cogumelos",                   precos: { mini: 9.90,  meia: 11.90, dose: 16.90 } },
        { nome: "Grelhada mista com batata e esparregado",      precos: { mini: 10.00, meia: 12.90, dose: 16.90 } },
        { nome: "Costeleta de novilho grelhada",                precos: { meia: 14.90 } },
        { nome: "Leitão à Bairrada",                            precos: { meia: 15.00 } },
        { nome: "Alheira de Mirandela com ovo",                 precos: { dose: 11.00 } },
        { nome: "Alheira de caça",                              precos: { dose: 11.50 } },
      ],
    },
  ],
};
