import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/shared/material/models/question.model';
import { StyleComparison } from 'src/shared/material/models/style-comparison.model';
import { beerDataComparison } from 'src/shared/material/questions/beer-comparison';
import { beerCharacteristicsEN } from 'src/shared/material/questions/english-beer-characteristic';
import { beerCharacteristicsPT } from 'src/shared/material/questions/portuguese-beer-characteristic';
import { ENGLISH_QUESTIONS, PORTUGUESE_QUESTIONS } from 'src/shared/material/questions/questions-array';

@Component({
  selector: 'app-proccess-and-supplies',
  templateUrl: './proccess-and-supplies.component.html',
  styleUrls: ['./proccess-and-supplies.component.scss']
})
export class ProccessAndSuppliesComponent {
  characteristicsDataSource: any[] = [];
  proccessAndSuppliesDataSource: any[] = [];
  language: string = "PT";
  blured: boolean = true;
  toggleForm: FormGroup = new FormGroup({
    toggle: new FormControl([{value: "PT", disabled: !this.blured}, Validators.required]),
    blur: new FormControl([{value: null}])
  })
  proccessColumns: string[] = []
  questionColumns: string[] = [];

  
  beerCharacteristicQuestionPT: Question;
  proccessAndSuppliesQuestionPT: Question;
  proccessAndSuppliesQuestionEN: Question;
  beerCharacteristicQuestionEN: Question;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.generateRandomQuestions();
    this.getDataSources();
  }

  getDataSources() {
    this.characteristicsDataSource = [this.beerCharacteristicQuestionPT];
    this.proccessAndSuppliesDataSource = [this.proccessAndSuppliesQuestionPT];
    this.questionColumns = this.beerCharacteristicQuestionPT.question.map((element: any) => element.question);
    this.proccessColumns = this.proccessAndSuppliesQuestionPT.question.map((element: any) => element.question);
  }

  generateRandomQuestions() {
    const possibleCharacteristicsEN: Object[] = [];
    const possibleCharacteristicsPT: Object[] = [];
    const usedIndexes: number[] = [];

    while (possibleCharacteristicsEN.length < 3) {
      let number;
      do {
        number = Math.floor(Math.random() * (beerCharacteristicsEN.length - 1));
      } while (usedIndexes.includes(number));
      possibleCharacteristicsPT.push(beerCharacteristicsPT[number]);
      possibleCharacteristicsEN.push(beerCharacteristicsEN[number]);
      usedIndexes.push(number);
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
  }

  getToggleValue(event: any) {
      this.language = event.value;
      if(this.language === "PT") {
        this.characteristicsDataSource = [this.beerCharacteristicQuestionPT];
        this.proccessAndSuppliesDataSource = [this.proccessAndSuppliesQuestionPT];
        this.questionColumns = this.beerCharacteristicQuestionPT.question.map((element: any) => element.question);
        this.proccessColumns = this.proccessAndSuppliesQuestionPT.question.map((element: any) => element.question)
      } else{
        this.characteristicsDataSource = [this.beerCharacteristicQuestionEN];
        this.proccessAndSuppliesDataSource = [this.proccessAndSuppliesQuestionEN]
        this.questionColumns = this.beerCharacteristicQuestionEN.question.map((element: any) => element.question);
        this.proccessColumns = this.proccessAndSuppliesQuestionEN.question.map((element: any) => element.question)
      }      
  }
  blur() {
    this.blured = !this.blured
    this.toggleForm.get('toggle').disable();
  }

  getBlur() {
    return this.blured ? 'blur' : ''
  }

  back(){
    this.router.navigate(['']);
  }
}
