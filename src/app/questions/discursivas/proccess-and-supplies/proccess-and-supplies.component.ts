import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/shared/material/models/question.model';
import { beerCharacteristicsEN } from 'src/shared/material/questions/english-beer-characteristic';
import { beerCharacteristicsPT } from 'src/shared/material/questions/portuguese-beer-characteristic';
import { ENGLISH_QUESTIONS, PORTUGUESE_QUESTIONS } from 'src/shared/material/questions/questions-array';
import { formatTimer } from 'src/shared/material/utils/utils';

@Component({
  selector: 'app-proccess-and-supplies',
  templateUrl: './proccess-and-supplies.component.html',
  styleUrls: ['./proccess-and-supplies.component.scss']
})
export class ProccessAndSuppliesComponent {
  timer: number = 1800;
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
    this.characteristicsDataSource = [this.currentCharacteristicsDataSource()];
    this.proccessAndSuppliesDataSource = [this.currentProccessAndSuppliesDataSource()];
    this.updateQuestionColumns();
  }
  
  currentCharacteristicsDataSource(): Question {
    return this.language === 'PT' ? this.beerCharacteristicQuestionPT : this.beerCharacteristicQuestionEN;
  }
  
  currentProccessAndSuppliesDataSource(): Question {
    return this.language === 'PT' ? this.proccessAndSuppliesQuestionPT : this.proccessAndSuppliesQuestionEN;
  }
  
  updateQuestionColumns() {
    const characteristicsDataSource = this.currentCharacteristicsDataSource();
    this.questionColumns = characteristicsDataSource.question.map((element: any) => element.question);
    this.proccessColumns = this.currentProccessAndSuppliesDataSource().question.map((element: any) => element.question);
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
  
    const randomNumberSupplies = Math.floor(Math.random() * ENGLISH_QUESTIONS.proccessAndSuppliesQuestions.length);
    this.proccessAndSuppliesQuestionEN = {
      question: ENGLISH_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].question,
      title: ENGLISH_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].title
    };
    this.proccessAndSuppliesQuestionPT = {
      question: PORTUGUESE_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].question,
      title: PORTUGUESE_QUESTIONS.proccessAndSuppliesQuestions[randomNumberSupplies].title
    };
  
    const randomNumberCharacteristics: number = Math.floor(Math.random() * (ENGLISH_QUESTIONS.characteristicsQuestions.length));
    if (randomNumberCharacteristics !== 0) {
      this.beerCharacteristicQuestionEN = {
        question: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title
      };
      this.beerCharacteristicQuestionPT = {
        question: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title
      };
    } else {
      this.beerCharacteristicQuestionEN = {
        question: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: ENGLISH_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title,
        characteristics: possibleCharacteristicsEN
      };
      this.beerCharacteristicQuestionPT = {
        question: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].question,
        title: PORTUGUESE_QUESTIONS.characteristicsQuestions[randomNumberCharacteristics].title,
        characteristics: possibleCharacteristicsPT
      };
    }
  }
  
  getToggleValue(event: any) {
    this.language = event.value;
    this.getDataSources();
  }
  
  blur() {
    this.blured = !this.blured;
    setInterval(() => {
      if(this.timer > 0) this.attTimer();
    }, 1000)
    this.toggleForm.get('toggle').disable();
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

  back(){
    this.router.navigate(['']);
  }
}
