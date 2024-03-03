import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TrueOrFalse } from 'src/shared/material/models/true-or-false.model';
import { beerCharacteristicsEN } from 'src/shared/material/questions/english-beer-characteristic';
import { S0, S0TITLE } from 'src/shared/material/questions/english-questionsMock';
import { beerCharacteristicsPT } from 'src/shared/material/questions/portuguese-beer-characteristic';
import { S0PT, S0TITLEPT } from 'src/shared/material/questions/portuguese-questionsMock';
import { ENGLISH_QUESTIONS, PORTUGUESE_QUESTIONS } from 'src/shared/material/questions/questions-array';
import { ENGLISHQUESTIONS, PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';
import { trueOrFalseMockEN, trueOrFalseMockPT } from 'src/shared/material/questions/true-or-false';
import { formatTimer } from 'src/shared/material/utils/utils';

const pdfMake = require('pdfmake/build/pdfmake.js');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-full-test',
  templateUrl: './full-test.component.html',
  styleUrls: ['./full-test.component.scss']
})
export class FullTestComponent implements OnInit {
  blured: boolean = true;
  toggleForm: FormGroup = new FormGroup({
    toggle: new FormControl([{value: "PT", disabled: !this.blured}, Validators.required])
  })
  ENGLISH = ENGLISHQUESTIONS;
  PORTUGUESE = PORTUGUESEQUESTIONS;
  language: string = "PT";

  beerCharacteristicQuestion: any;
  proccessAndSuppliesQuestion: any;
  recipeQuestion: any;
  comparisonQuestion: any[] = [];
  
  beerCharacteristicQuestionEN: any;
  proccessAndSuppliesQuestionEN: any;
  recipeQuestionEN: any;
  comparisonQuestionEN: any[] = [];

  beerCharacteristicQuestionPT: any;
  proccessAndSuppliesQuestionPT: any;
  recipeQuestionPT: any;
  comparisonQuestionPT: any[] = [];
  
  dataSourceComparison: any;

  questionColumnsComparison: any[] = [];
  questionColumnsRecipe: any[] = [];
  questionColumnsProccess: any[] = [];
  questionColumnsCharacteristic: any = [];
  questionsColumnsTF = [
    'description'
  ]
  questionPTComparison = {
    QS0: S0PT,
    QS0TITLE: S0TITLEPT
  };
  questionENComparison = {
    QS0: S0,
    QS0TITLE: S0TITLE
  };
  trueOrFalsePT: TrueOrFalse[] = trueOrFalseMockPT.questions;
  trueOrFalseEN: TrueOrFalse[] = trueOrFalseMockEN.questions;
  randomNumbersTrueOrFalse: number[] = [];
  trueOrFalseQuestions: TrueOrFalse[] = [];
  trueOrFalseFilteredPT: TrueOrFalse[] = [];
  trueOrFalseFilteredEN: TrueOrFalse[] = []

  timer = 5400;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.getRandomQuestions();
    this.handleDataSources();

  }

  handleDataSources() {
    this.language === 'PT' ? this.dataSourceComparison = this.questionPTComparison.QS0 : this.dataSourceComparison = this.questionENComparison.QS0;
    this.questionColumnsComparison = this.dataSourceComparison.map((element: any) => element.question);
    this.questionColumnsRecipe = this.recipeQuestion.question.map((element: any) => element.question);
    this.questionColumnsProccess = this.proccessAndSuppliesQuestion.question.map((element: any) => element.question);
    this.questionColumnsCharacteristic = this.beerCharacteristicQuestion.question.map((element: any) => element.question);
  }

  getRandomQuestions() {
    const randomNumberRecipe = Math.floor(Math.random() * (ENGLISH_QUESTIONS.recipeQuestions.recipe.length - 1));
    const possibleCharacteristicsEN: any[] = [];
    const possibleCharacteristicsPT: any[] = [];
    const usedIndexes: number[] = [];
    const usedComparsions: number[] = []

    while(this.randomNumbersTrueOrFalse.length < 20) {
      const randomNumber = Math.floor(Math.random() * (124 - 1 + 1) + 1);
      if(!this.randomNumbersTrueOrFalse.includes(randomNumber)) this.randomNumbersTrueOrFalse.push(randomNumber)
    }
    
    this.randomNumbersTrueOrFalse.forEach(number => {
      this.trueOrFalseFilteredPT.push(this.trueOrFalsePT.find(question => question.id === number))
      this.trueOrFalseFilteredEN.push(this.trueOrFalseEN.find(question => question.id === number))
    })

    while (possibleCharacteristicsEN.length < 3) {
      let number;
      do {
        number = Math.floor(Math.random() * (beerCharacteristicsEN.length - 1));
      } while (usedIndexes.includes(number));
      possibleCharacteristicsPT.push(beerCharacteristicsPT[number]);
      possibleCharacteristicsEN.push(beerCharacteristicsEN[number]);
      usedIndexes.push(number);
    }

    this.recipeQuestionEN = {
      question: ENGLISH_QUESTIONS.recipeQuestions.question,
      title: ENGLISH_QUESTIONS.recipeQuestions.title,
      recipe: ENGLISH_QUESTIONS.recipeQuestions.recipe[randomNumberRecipe]
    }

    this.recipeQuestionPT = {
      question: PORTUGUESE_QUESTIONS.recipeQuestions.question,
      title: PORTUGUESE_QUESTIONS.recipeQuestions.title,
      recipe: PORTUGUESE_QUESTIONS.recipeQuestions.recipe[randomNumberRecipe]
    }

    while(this.comparisonQuestionEN.length < 2) {
      let number;
      do {
       number = Math.floor(Math.random() * (ENGLISH_QUESTIONS.comparisonQuestions.comparison.length - 1 ) );
      } while (usedComparsions.includes(number))
      this.comparisonQuestionEN.push({
        question: ENGLISH_QUESTIONS.comparisonQuestions.question,
        title: ENGLISH_QUESTIONS.comparisonQuestions.title,
        comparison: ENGLISH_QUESTIONS.comparisonQuestions.comparison[number]
      })
      this.comparisonQuestionPT.push({
        question: this.PORTUGUESE.QS0,
        title: this.PORTUGUESE.QS0TITLE,
        comparison: PORTUGUESE_QUESTIONS.comparisonQuestions.comparison[number]
      })
    }
    
    const randomNumberSupplies: number = Math.floor(Math.random() * (ENGLISH_QUESTIONS.proccessAndSuppliesQuestions.length));
    this.proccessAndSuppliesQuestionEN = {
      question: ENGLISH_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].question,
      title: ENGLISH_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].title
    }
    this.proccessAndSuppliesQuestionPT = {
      question: PORTUGUESE_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].question,
      title: PORTUGUESE_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].title
    }

    const randomNumberCharacteristics: number = Math.floor(Math.random() * (ENGLISH_QUESTIONS.characteristicsQuestions.length) );
    if(randomNumberCharacteristics !== 0) {
      this.beerCharacteristicQuestionEN = {
        question: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title
      }
      this.beerCharacteristicQuestionPT = {
        question: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title
      }
    } else {
      this.beerCharacteristicQuestionEN = {
        question: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title,
        characteristics: possibleCharacteristicsEN
      }
      this.beerCharacteristicQuestionPT = {
        question: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title,
        characteristics: possibleCharacteristicsPT
      }
    }

    this.handleLanguage();
  }

  handleLanguage() {
    if(this.language === "EN") {
      this.recipeQuestion = this.recipeQuestionEN;
      this.comparisonQuestion = this.comparisonQuestionEN;
      this.beerCharacteristicQuestion = this.beerCharacteristicQuestionEN;
      this.proccessAndSuppliesQuestion = this.proccessAndSuppliesQuestionEN;
      this.dataSourceComparison = this.questionENComparison.QS0;
      this.trueOrFalseQuestions = this.trueOrFalseFilteredEN;
    } else {
      this.recipeQuestion = this.recipeQuestionPT;
      this.comparisonQuestion = this.comparisonQuestionPT;
      this.beerCharacteristicQuestion = this.beerCharacteristicQuestionPT;
      this.proccessAndSuppliesQuestion = this.proccessAndSuppliesQuestionPT;
      this.dataSourceComparison = this.questionPTComparison.QS0;
      this.trueOrFalseQuestions = this.trueOrFalseFilteredPT;
    }
    this.handleDataSources();
  }

  blur() {
    this.blured = !this.blured;
    setInterval(() => {
      if(this.timer > 0) this.attTimer();
    }, 1000)
    localStorage.setItem('DEPLOYED_TEST', JSON.stringify(1));
  }

  attTimer() {
    this.timer > 0 ? this.timer-- : '';
  }

  formatTime(timer: number): string {
    return formatTimer(timer)
  }

  getBlur() {
    return this.blured ? 'blur' : ''
  }

  back() {
    this.router.navigate(['']);
  }

  getToggleValue(event: any) {
    this.language = event.value;
    this.handleLanguage();
  }

  generatePDF(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let document = {
      content: [
        {text: 'BJCP WRITTEN EXAM GENERATOR', style: 'header', alignment: 'center'},
        {text: `Prova gerada em: ${day}/${month}/${year}`, alignment: 'center'},

        {text: 'A prova tem duração de 1h30! - Se programe para conseguir realizar', fontSize: 20, alignment: 'center', margin: [0, 20, 0, 20]},
        {text: 'Pegue seus papéis, lapiseira, borracha, calculadora, água e se acomode num lugar tranquilo', fontSize: 20, alignment: 'center'},
        {text: 'VERDADEIRO OU FALSO', pageBreak: 'before', style: 'subheader', alignment: 'center'},
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [70, 'auto'],
            headerRows: 2,
            body: [
              [{text: 'V | F', style: 'VF'}, {text: `1 - ${this.trueOrFalseQuestions[0].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `2 - ${this.trueOrFalseQuestions[1].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `3 - ${this.trueOrFalseQuestions[2].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `4 - ${this.trueOrFalseQuestions[3].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `5 - ${this.trueOrFalseQuestions[4].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `6 - ${this.trueOrFalseQuestions[5].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `7 - ${this.trueOrFalseQuestions[6].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `8 - ${this.trueOrFalseQuestions[7].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `9 - ${this.trueOrFalseQuestions[8].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `10 - ${this.trueOrFalseQuestions[9].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `11 - ${this.trueOrFalseQuestions[10].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `12 - ${this.trueOrFalseQuestions[11].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `13 - ${this.trueOrFalseQuestions[12].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `14 - ${this.trueOrFalseQuestions[13].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `15 - ${this.trueOrFalseQuestions[14].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `16 - ${this.trueOrFalseQuestions[15].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `17 - ${this.trueOrFalseQuestions[16].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `18 - ${this.trueOrFalseQuestions[17].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `19 - ${this.trueOrFalseQuestions[18].description}`, style: 'trueOrFalse', alignment: 'left'}],
              [{text: 'V | F', style: 'VF'}, {text: `20 - ${this.trueOrFalseQuestions[19].description}`, style: 'trueOrFalse', alignment: 'left'}],
            ]
          }
        },
        {text: 'QUESTÃO 1', pageBreak: 'before', style: 'subheader', alignment: 'center'},
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 'auto'],
            headerRows: 2,
            body: [
              [{text: `${this.comparisonQuestion[0].title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              [{text: `${this.comparisonQuestion[0].question[0].value}`, style: 'value'}, {text: `${this.comparisonQuestion[0].question[0].question}`}],
              [{text: `${this.comparisonQuestion[0].question[1].value}`, style: 'value'}, {text: `${this.comparisonQuestion[0].question[1].question}`}],
              [{text: `${this.comparisonQuestion[0].question[2].value}`, style: 'value'}, {text: `${this.comparisonQuestion[0].question[2].question}`}],
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
            widths: [60, 'auto'],
            headerRows: 2,
            body: [
              [{text: `${this.recipeQuestion.title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              [{text: `${this.recipeQuestion.question[0].value}`, style: 'value'}, {text: `${this.recipeQuestion.question[0].question}`}],
              [{text: `${this.recipeQuestion.question[1].value}`, style: 'value'}, {text: `${this.recipeQuestion.question[1].question}`}],
              [{text: `${this.recipeQuestion.question[2].value}`, style: 'value'}, {text: `${this.recipeQuestion.question[2].question}`}],
              [{text: `${this.recipeQuestion.question[3].value}`, style: 'value'}, {text: `${this.recipeQuestion.question[3].question}`}],
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
            widths: [60, 'auto'],
            headerRows: 2,
            body: [
              [{text: `${this.comparisonQuestion[1].title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              [{text: `${this.comparisonQuestion[1].question[0].value}`, style: 'value'}, {text: `${this.comparisonQuestion[1].question[0].question}`}],
              [{text: `${this.comparisonQuestion[1].question[1].value}`, style: 'value'}, {text: `${this.comparisonQuestion[1].question[1].question}`}],
              [{text: `${this.comparisonQuestion[1].question[2].value}`, style: 'value'}, {text: `${this.comparisonQuestion[1].question[2].question}`}],
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
            widths: [60, 'auto'],
            headerRows: 3,
            body: [
              [{text: `${this.proccessAndSuppliesQuestion.title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              [{text: `${this.proccessAndSuppliesQuestion.question[0].value}`, style: 'value'}, {text: `${this.proccessAndSuppliesQuestion.question[0].question}`}],
              [{text: `${this.proccessAndSuppliesQuestion.question[1].value}`, style: 'value'}, {text: `${this.proccessAndSuppliesQuestion.question[1].question}`}],
              [{text: `${this.proccessAndSuppliesQuestion.question[2].value}`, style: 'value'}, {text: `${this.proccessAndSuppliesQuestion.question[2].question}`}],
            ]
          }
        },
        {text: 'QUESTÃO 5', style: 'subheader', alignment: 'center'},
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [60, 'auto'],
            headerRows: 2,
            body: [
              [{text: `${this.beerCharacteristicQuestion.title}`, style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              [{text: `${this.beerCharacteristicQuestion.question[0].value}`, style: 'value'}, {text: `${this.beerCharacteristicQuestion.question[0].question}`}],
              [{text: `${this.beerCharacteristicQuestion.question[1].value}`, style: 'value'}, {text: `${this.beerCharacteristicQuestion.question[1].question}`}],
              [{text: `${this.beerCharacteristicQuestion.question[2].value}`, style: 'value'}, {text: `${this.beerCharacteristicQuestion.question[2].question}`}],
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
        value: {
          alignment: 'center',
          fontSize: 15,
          bold: true
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },
        trueOrFalse: {
          bold: false,
          fontSize: 13,
          color: 'black'
        },
        VF: {
          bold: true,
          alignment: 'center',
          lineHeight: 2,
          fontSize: 20,
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
