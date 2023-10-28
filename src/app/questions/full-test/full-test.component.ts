import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { beerCharacteristics } from 'src/shared/material/questions/beer-characteristic';
import { beerDataComparison } from 'src/shared/material/questions/beer-comparison';
import { S0, S0TITLE, S1, S11, S11TITLE, S13, S13TITLE, S14, S14TITLE, S15, S15TITLE, S1TITLE, S3, S3TITLE, S4, S4TITLE, S8, S8TITLE, S9, S9TITLE } from 'src/shared/material/questions/questionsMock';
import { recipeStyles } from 'src/shared/material/questions/recipe-styles';

const pdfMake = require('pdfmake/build/pdfmake.js');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-full-test',
  templateUrl: './full-test.component.html',
  styleUrls: ['./full-test.component.css']
})
export class FullTestComponent implements OnInit {
  blured: boolean = true;

  QS0 = S0;
  QS14 = S14;
  QS1 = S1;
  QS3 = S3;
  QS4 = S4;
  QS8 = S8;
  QS15 = S15;
  QS9 = S9;
  QS11 = S11;
  QS13 = S13;
  QS0TITLE = S0TITLE;
  QS14TITLE = S14TITLE;
  QS1TITLE = S1TITLE;
  QS3TITLE = S3TITLE;
  QS4TITLE = S4TITLE;
  QS8TITLE = S8TITLE;
  QS15TITLE = S15TITLE;
  QS9TITLE = S9TITLE;
  QS11TITLE = S11TITLE;
  QS13TITLE = S13TITLE;

  beerCharacteristicQuestion: any;
  proccessAndSuppliesQuestion: any;
  recipeQuestion: any;
  comparisonQuestion: any[] = [];
  characteristicsQuestions: any[] = [
    {question: this.QS1, title: this.QS1TITLE, characteristcs: beerCharacteristics},
    {question: this.QS3, title: this.QS3TITLE},
  ]
  proccessAndSuppliesQuestions: any[] = [
    {question: this.QS9, title: this.QS9TITLE},
    {question: this.QS11, title: this.QS11TITLE},
    {question: this.QS13, title: this.QS13TITLE},
    {question: this.QS15, title: this.QS15TITLE},
    {question: this.QS8, title: this.QS8TITLE},
    {question: this.QS4, title: this.QS4TITLE},
  ]
  comparisonQuestions: any = {question: this.QS0, title: this.QS0TITLE, comparison: beerDataComparison}
  recipeQuestions: any = {question: this.QS14, title: this.QS14TITLE, recipe: recipeStyles}

  constructor(private router: Router){}

  ngOnInit(): void {
    this.getRandomQuestions();
  }

  getRandomQuestions() {
    const randomNumberRecipe = Math.floor(Math.random() * (this.recipeQuestions.recipe.length - 1));
    const possibleCharacteristics: any[] = [];
    const usedIndexes: number[] = [];
    const usedComparsions: number[] = []

    while (possibleCharacteristics.length < 3) {
      let number;
      do {
        number = Math.floor(Math.random() * (beerCharacteristics.length - 1));
      } while (usedIndexes.includes(number));

      possibleCharacteristics.push(beerCharacteristics[number]);
      usedIndexes.push(number);
    }

    this.recipeQuestion = {
      question: this.recipeQuestions.question,
      title: this.recipeQuestions.title,
      recipe: this.recipeQuestions.recipe[randomNumberRecipe]
    }

    while(this.comparisonQuestion.length < 2) {
      let number;
      do {
       number = Math.floor(Math.random() * (this.comparisonQuestions.comparison.length - 1 ) );
      } while (usedComparsions.includes(number))
      this.comparisonQuestion.push({
        question: this.QS0,
        title: this.QS0TITLE,
        comparison: this.comparisonQuestions.comparison[number]
      })
    }
    
    const randomNumberSupplies: number = Math.floor(Math.random() * (this.proccessAndSuppliesQuestions.length));
    this.proccessAndSuppliesQuestion = {
      question: this.proccessAndSuppliesQuestions[randomNumberSupplies].question,
      title: this.proccessAndSuppliesQuestions[randomNumberSupplies].title
    }

    const randomNumberCharacteristics: number = Math.floor(Math.random() * (this.characteristicsQuestions.length) );
    if(randomNumberCharacteristics !== 0) {
      this.beerCharacteristicQuestion = {
        question: this.characteristicsQuestions[randomNumberCharacteristics].question,
        title: this.characteristicsQuestions[randomNumberCharacteristics].title
      }
    } else {
      this.beerCharacteristicQuestion = {
        question: this.characteristicsQuestions[randomNumberCharacteristics].question,
        title: this.characteristicsQuestions[randomNumberCharacteristics].title,
        characteristics: possibleCharacteristics
      }
    }
  }

  blur() {
    this.blured = !this.blured
  }

  getBlur() {
    return this.blured ? 'blur' : ''
  }

  back() {
    this.router.navigate(['']);
  }

  generatePDF(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

  var document = {
    content: [
      {text: 'BJCP WRITTEN EXAM GENERATOR', style: 'header', alignment: 'center'},
      {text: `Prova gerada em: ${day}/${month}/${year}`, alignment: 'center'},

      {text: 'A prova tem duração de 1h30! - Se programe para conseguir realizar', fontSize: 20, alignment: 'center', margin: [0, 20, 0, 20]},
      {text: 'Pegue seus papéis, lapiseira, borracha, calculadora, água e se acomode num lugar tranquilo', fontSize: 20, alignment: 'center'},
      
      {text: 'QUESTÃO 1', pageBreak: 'before', style: 'subheader', alignment: 'center'},
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [200, 'auto'],
          headerRows: 2,
          body: [
            [{text: `${this.comparisonQuestion[0].title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
            [{text: `${this.comparisonQuestion[0].question[0].value}`}, {text: `${this.comparisonQuestion[0].question[0].question}`}],
            [{text: `${this.comparisonQuestion[0].question[1].value}`}, {text: `${this.comparisonQuestion[0].question[1].question}`}],
            [{text: `${this.comparisonQuestion[0].question[2].value}`}, {text: `${this.comparisonQuestion[0].question[2].question}`}],
          ]
        }
      },
      {text: `ID:${this.comparisonQuestion[0].comparison.id}`, style: 'tableHeader'},
      {
        ul: [
          {
            ol: [
              [
                {
                  columns: [
                    {text: `${this.comparisonQuestion[0].comparison.style1}`, fontSize: 20},
                    {
                      stack: [
                        {text: `${this.comparisonQuestion[0].comparison.style2}`, fontSize: 20},
                        
                      ]
                    },
                    {text:`${this.comparisonQuestion[0].comparison.style3}`, fontSize: 20},


                  ]
                },
              ]
            ]
          },
        ]
      },
      {text: 'QUESTÃO 2', style: 'subheader', alignment: 'center'},
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [200, 'auto'],
          headerRows: 2,
          body: [
            [{text: `${this.recipeQuestion.title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
            [{text: `${this.recipeQuestion.question[0].value}`}, {text: `${this.recipeQuestion.question[0].question}`}],
            [{text: `${this.recipeQuestion.question[1].value}`}, {text: `${this.recipeQuestion.question[1].question}`}],
            [{text: `${this.recipeQuestion.question[2].value}`}, {text: `${this.recipeQuestion.question[2].question}`}],
            [{text: `${this.recipeQuestion.question[3].value}`}, {text: `${this.recipeQuestion.question[3].question}`}],
          ]
        }
      },
      {
        ul: [
          {
            ol: [
              [
                {
                  columns: [
                    {text: `${this.recipeQuestion.recipe.style}`, alignment: 'center', fontSize: 20},
                    
                  ]
                },
              ]
            ]
          },
        ]
      },
      {text: 'QUESTÃO 3', pageBreak: 'before', style: 'subheader', alignment: 'center'},
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [200, 'auto'],
          headerRows: 2,
          body: [
            [{text: `${this.comparisonQuestion[1].title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
            [{text: `${this.comparisonQuestion[1].question[0].value}`}, {text: `${this.comparisonQuestion[1].question[0].question}`}],
            [{text: `${this.comparisonQuestion[1].question[1].value}`}, {text: `${this.comparisonQuestion[1].question[1].question}`}],
            [{text: `${this.comparisonQuestion[1].question[2].value}`}, {text: `${this.comparisonQuestion[1].question[2].question}`}],
          ]
        }
      },
      {text: `ID:${this.comparisonQuestion[1].comparison.id}`, style: 'tableHeader'},
      {
        ul: [
          {
            ol: [
              [
                {
                  columns: [
                    {text: `${this.comparisonQuestion[1].comparison.style1}`, fontSize: 20},
                    {
                      stack: [
                        {text: `${this.comparisonQuestion[1].comparison.style2}`, fontSize: 20},
                        
                      ]
                    },
                    {text:`${this.comparisonQuestion[1].comparison.style3}`, fontSize: 20},
                  ]
                },
              ]
            ]
          },
        ]
      },
      {text: 'QUESTÃO 4', style: 'subheader', alignment: 'center'},
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [200, 'auto'],
          headerRows: 3,
          body: [
            [{text: `${this.proccessAndSuppliesQuestion.title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
            [{text: `${this.proccessAndSuppliesQuestion.question[0].value}`}, {text: `${this.proccessAndSuppliesQuestion.question[0].question}`}],
            [{text: `${this.proccessAndSuppliesQuestion.question[1].value}`}, {text: `${this.proccessAndSuppliesQuestion.question[1].question}`}],
            [{text: `${this.proccessAndSuppliesQuestion.question[2].value}`}, {text: `${this.proccessAndSuppliesQuestion.question[2].question}`}],
          ]
        }
      },
      {text: 'QUESTÃO 5', style: 'subheader', alignment: 'center'},
      {
        style: 'tableExample',
        color: '#444',
        table: {
          widths: [200, 'auto'],
          headerRows: 2,
          body: [
            [{text: `${this.beerCharacteristicQuestion.title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
            [{text: `${this.beerCharacteristicQuestion.question[0].value}`}, {text: `${this.beerCharacteristicQuestion.question[0].question}`}],
            [{text: `${this.beerCharacteristicQuestion.question[1].value}`}, {text: `${this.beerCharacteristicQuestion.question[1].question}`}],
            [{text: `${this.beerCharacteristicQuestion.question[2].value}`}, {text: `${this.beerCharacteristicQuestion.question[2].question}`}],
          ]
        }
      },
    
    ],
    styles: {
      header: {
        fontSize: 40,
        bold: true,
        margin: [0, 0, 0, 300]
      },
      subheader: {
        fontSize: 20,
        bold: true,
        color: 'blue',
        margin: [20, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },
    defaultStyle: {
      // alignment: 'justify'
    }
    
  }
  if(this.beerCharacteristicQuestion.characteristics?.length) {
    document.content.push( {
      ul: [
        {
          ol: [
            [
              {
                columns: [
                  {text: `${this.beerCharacteristicQuestion.characteristics[0].value}`, fontSize: 20},
                  {
                    stack: [
                      {text: `${this.beerCharacteristicQuestion.characteristics[1].value}`, fontSize: 20},
                      
                    ]
                  },
                  {text:`${this.beerCharacteristicQuestion.characteristics[2].value}`, fontSize: 20},
                ]
              },
            ]
          ]
        },
      ]
    },)
  }

    pdfMake.createPdf(document).download(`${day}/${month}/${year}_WRITTEN.pdf`);
  }
}
