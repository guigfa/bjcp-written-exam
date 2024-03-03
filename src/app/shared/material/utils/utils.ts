import * as pdfFonts from 'pdfmake/build/vfs_fonts';

const pdfMake = require('pdfmake/build/pdfmake.js');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export function formatTimer(time: number): string {
  if (time > 1800) {
    const horas = Math.floor(time / 3600);
    const minutos = Math.floor((time % 3600) / 60);
    const segundos = time % 60 < 10 ? `0${time % 60}` : time % 60;
    return `${horas}:${minutos}:${segundos}`;
  }
  const minutos = Math.floor((time % 3600) / 60);
  const segundos = time % 60;
  return `${minutos}:${segundos}`;
}

export function generatePDF(
  trueOrFalseQuestions?: any[],
  comparisonQuestion?: any[],
  proccessAndSuppliesQuestion?: any,
  beerCharacteristicQuestion?: any,
  recipeQuestion?: any
) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let document = {
    content: [
      {
        text: 'BJCP WRITTEN EXAM GENERATOR',
        style: 'header',
        alignment: 'center',
      },
      { text: `Prova gerada em: ${day}/${month}/${year}`, alignment: 'center' },

      {
        text: 'A prova tem duração de 1h30! - Se programe para conseguir realizar',
        fontSize: 20,
        alignment: 'center',
        margin: [0, 20, 0, 20],
      },
      {
        text: 'Pegue seus papéis, lapiseira, borracha, calculadora, água e se acomode num lugar tranquilo',
        fontSize: 20,
        alignment: 'center',
      },
      {
        text: 'VERDADEIRO OU FALSO',
        pageBreak: 'before',
        style: 'subheader',
        alignment: 'center',
      },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [70, 'auto'],
          headerRows: 2,
          body: [
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `1 - ${trueOrFalseQuestions[0].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `2 - ${trueOrFalseQuestions[1].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `3 - ${trueOrFalseQuestions[2].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `4 - ${trueOrFalseQuestions[3].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `5 - ${trueOrFalseQuestions[4].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `6 - ${trueOrFalseQuestions[5].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `7 - ${trueOrFalseQuestions[6].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `8 - ${trueOrFalseQuestions[7].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `9 - ${trueOrFalseQuestions[8].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `10 - ${trueOrFalseQuestions[9].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `11 - ${trueOrFalseQuestions[10].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `12 - ${trueOrFalseQuestions[11].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `13 - ${trueOrFalseQuestions[12].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `14 - ${trueOrFalseQuestions[13].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `15 - ${trueOrFalseQuestions[14].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `16 - ${trueOrFalseQuestions[15].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `17 - ${trueOrFalseQuestions[16].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `18 - ${trueOrFalseQuestions[17].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `19 - ${trueOrFalseQuestions[18].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
            [
              { text: 'V | F', style: 'VF' },
              {
                text: `20 - ${trueOrFalseQuestions[19].description}`,
                style: 'trueOrFalse',
                alignment: 'left',
              },
            ],
          ],
        },
      },
      {
        text: 'QUESTÃO 1',
        pageBreak: 'before',
        style: 'subheader',
        alignment: 'center',
      },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [60, 'auto'],
          headerRows: 2,
          body: [
            [
              {
                text: `${comparisonQuestion[0].title}`,
                style: 'tableHeader',
                colSpan: 2,
                alignment: 'center',
              },
              {},
            ],
            [
              {
                text: `${comparisonQuestion[0].question[0].value}`,
                style: 'value',
              },
              { text: `${comparisonQuestion[0].question[0].question}` },
            ],
            [
              {
                text: `${comparisonQuestion[0].question[1].value}`,
                style: 'value',
              },
              { text: `${comparisonQuestion[0].question[1].question}` },
            ],
            [
              {
                text: `${comparisonQuestion[0].question[2].value}`,
                style: 'value',
              },
              { text: `${comparisonQuestion[0].question[2].question}` },
            ],
          ],
        },
      },
      {
        text: `ID:${comparisonQuestion[0].comparison.id}`,
        style: 'tableHeader',
      },
      {
        ul: [
          {
            ol: [
              [
                {
                  columns: [
                    {
                      text: `${comparisonQuestion[0].comparison.style1}`,
                      fontSize: 20,
                    },
                    {
                      stack: [
                        {
                          text: `${comparisonQuestion[0].comparison.style2}`,
                          fontSize: 20,
                        },
                      ],
                    },
                    {
                      text: `${comparisonQuestion[0].comparison.style3}`,
                      fontSize: 20,
                    },
                  ],
                },
              ],
            ],
          },
        ],
      },
      { text: 'QUESTÃO 2', style: 'subheader', alignment: 'center' },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [60, 'auto'],
          headerRows: 2,
          body: [
            [
              {
                text: `${recipeQuestion.title}`,
                style: 'tableHeader',
                colSpan: 2,
                alignment: 'center',
              },
              {},
            ],
            [
              { text: `${recipeQuestion.question[0].value}`, style: 'value' },
              { text: `${recipeQuestion.question[0].question}` },
            ],
            [
              { text: `${recipeQuestion.question[1].value}`, style: 'value' },
              { text: `${recipeQuestion.question[1].question}` },
            ],
            [
              { text: `${recipeQuestion.question[2].value}`, style: 'value' },
              { text: `${recipeQuestion.question[2].question}` },
            ],
            [
              { text: `${recipeQuestion.question[3].value}`, style: 'value' },
              { text: `${recipeQuestion.question[3].question}` },
            ],
          ],
        },
      },
      {
        ul: [
          {
            ol: [
              [
                {
                  columns: [
                    {
                      text: `${recipeQuestion.recipe.style}`,
                      alignment: 'center',
                      fontSize: 20,
                    },
                  ],
                },
              ],
            ],
          },
        ],
      },
      {
        text: 'QUESTÃO 3',
        pageBreak: 'before',
        style: 'subheader',
        alignment: 'center',
      },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [60, 'auto'],
          headerRows: 2,
          body: [
            [
              {
                text: `${comparisonQuestion[1].title}`,
                style: 'tableHeader',
                colSpan: 2,
                alignment: 'center',
              },
              {},
            ],
            [
              {
                text: `${comparisonQuestion[1].question[0].value}`,
                style: 'value',
              },
              { text: `${comparisonQuestion[1].question[0].question}` },
            ],
            [
              {
                text: `${comparisonQuestion[1].question[1].value}`,
                style: 'value',
              },
              { text: `${comparisonQuestion[1].question[1].question}` },
            ],
            [
              {
                text: `${comparisonQuestion[1].question[2].value}`,
                style: 'value',
              },
              { text: `${comparisonQuestion[1].question[2].question}` },
            ],
          ],
        },
      },
      {
        text: `ID:${comparisonQuestion[1].comparison.id}`,
        style: 'tableHeader',
      },
      {
        ul: [
          {
            ol: [
              [
                {
                  columns: [
                    {
                      text: `${comparisonQuestion[1].comparison.style1}`,
                      fontSize: 20,
                    },
                    {
                      stack: [
                        {
                          text: `${comparisonQuestion[1].comparison.style2}`,
                          fontSize: 20,
                        },
                      ],
                    },
                    {
                      text: `${comparisonQuestion[1].comparison.style3}`,
                      fontSize: 20,
                    },
                  ],
                },
              ],
            ],
          },
        ],
      },
      { text: 'QUESTÃO 4', style: 'subheader', alignment: 'center' },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [60, 'auto'],
          headerRows: 3,
          body: [
            [
              {
                text: `${proccessAndSuppliesQuestion.title}`,
                style: 'tableHeader',
                colSpan: 2,
                alignment: 'center',
              },
              {},
            ],
            [
              {
                text: `${proccessAndSuppliesQuestion.question[0].value}`,
                style: 'value',
              },
              { text: `${proccessAndSuppliesQuestion.question[0].question}` },
            ],
            [
              {
                text: `${proccessAndSuppliesQuestion.question[1].value}`,
                style: 'value',
              },
              { text: `${proccessAndSuppliesQuestion.question[1].question}` },
            ],
            [
              {
                text: `${proccessAndSuppliesQuestion.question[2].value}`,
                style: 'value',
              },
              { text: `${proccessAndSuppliesQuestion.question[2].question}` },
            ],
          ],
        },
      },
      { text: 'QUESTÃO 5', style: 'subheader', alignment: 'center' },
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [60, 'auto'],
          headerRows: 2,
          body: [
            [
              {
                text: `${beerCharacteristicQuestion.title}`,
                style: 'tableHeader',
                colSpan: 2,
                alignment: 'center',
              },
              {},
            ],
            [
              {
                text: `${beerCharacteristicQuestion.question[0].value}`,
                style: 'value',
              },
              { text: `${beerCharacteristicQuestion.question[0].question}` },
            ],
            [
              {
                text: `${beerCharacteristicQuestion.question[1].value}`,
                style: 'value',
              },
              { text: `${beerCharacteristicQuestion.question[1].question}` },
            ],
            [
              {
                text: `${beerCharacteristicQuestion.question[2].value}`,
                style: 'value',
              },
              { text: `${beerCharacteristicQuestion.question[2].question}` },
            ],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 40,
        bold: true,
        margin: [0, 0, 0, 300],
      },
      subheader: {
        fontSize: 20,
        bold: true,
        color: 'blue',
        margin: [20, 10, 0, 5],
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
      value: {
        alignment: 'center',
        fontSize: 15,
        bold: true,
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black',
      },
      trueOrFalse: {
        bold: false,
        fontSize: 13,
        color: 'black',
      },
      VF: {
        bold: true,
        alignment: 'center',
        lineHeight: 2,
        fontSize: 20,
        color: 'black',
      },
    },
    defaultStyle: {
      // alignment: 'justify'
    },
  };
  if (beerCharacteristicQuestion.characteristics?.length) {
    document.content.push({
      ul: [
        {
          ol: [
            [
              {
                columns: [
                  {
                    text: `${beerCharacteristicQuestion.characteristics[0].value}`,
                    fontSize: 20,
                  },
                  {
                    stack: [
                      {
                        text: `${beerCharacteristicQuestion.characteristics[1].value}`,
                        fontSize: 20,
                      },
                    ],
                  },
                  {
                    text: `${beerCharacteristicQuestion.characteristics[2].value}`,
                    fontSize: 20,
                  },
                ],
              },
            ],
          ],
        },
      ],
    });
  }

  pdfMake.createPdf(document).download(`${day}/${month}/${year}_WRITTEN.pdf`);
}
