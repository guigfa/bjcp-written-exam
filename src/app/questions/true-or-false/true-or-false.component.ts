import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { trueOrFalseMock } from 'src/shared/material/lists/true-or-false';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.css']
})
export class TrueOrFalseComponent implements OnInit {


  trueOrFalse: any[] = trueOrFalseMock.questions;
  count: number = 0;
  questionsColumns: string[] = [
    'value',
    'description'
  ]
  randomNumbers: number[] = [];
  controllerList: any[] = [];
  questionsToDisplay: any[] = [];
  questionsToCompare: any[] = [];
  wrongQuestions: any[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    value: new FormControl(null, Validators.required),
  })
  result = false;

  constructor(){
  }

  ngOnInit(): void {
    this.generateQuestions()
  }

  generateQuestions(){
    const count = 20;

    while(this.randomNumbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (124 - 1 + 1) + 1);
      if(!this.randomNumbers.includes(randomNumber)) this.randomNumbers.push(randomNumber)
    }

    this.randomNumbers.sort((a, b) => a - b)
    
    this.randomNumbers.forEach(number => {
      this.questionsToDisplay.push(this.trueOrFalse.find(question => question.id === number))
    })
    this.questionsToCompare = [...this.questionsToDisplay]
    this.wrongQuestions = this.questionsToCompare;
  }

  changeQuestions(event: any, id: number) {
    let question = this.questionsToCompare.find(question => question.id === id);

    if(event.value === question.value){
      if(this.controllerList.some((c: any) => c.id === question.id)) return;
      this.controllerList.push(question)
      this.wrongQuestions = this.wrongQuestions.filter(c => c.id !== question.id);
      this.count++;
    } else {
      if(this.controllerList.some((c: any) => c.id === question.id)) {
        this.controllerList = this.controllerList.filter((c) => c.id !== question.id); 
        this.count--;
        this.wrongQuestions.push(question)
      }
    } 
  }

  checkAnswer(){
    this.result = true;
  } 

  backToTable(){
    this.randomNumbers = [];
    this.count = 0;
    this.questionsToDisplay = [];
    this.result = false;
    this.generateQuestions();
  }
}