import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrueOrFalse } from 'src/shared/material/models/true-or-false.model';
import { trueOrFalseMockEN, trueOrFalseMockPT } from 'src/shared/material/questions/true-or-false';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss']
})
export class TrueOrFalseComponent implements OnInit {


  checkedQuestion: number[] = [];
  trueOrFalsePT: TrueOrFalse[] = trueOrFalseMockPT.questions;
  trueOrFalseEN: TrueOrFalse[] = trueOrFalseMockEN.questions;
  trueOrFalse: TrueOrFalse[] = [];
  hasChanged: number = 0;
  count: number = 0;
  questionsColumns: string[] = [
    'value',
    'description'
  ]
  randomNumbers: number[] = [];
  controllerList: TrueOrFalse[] = [];
  questionsToDisplayPT: TrueOrFalse[] = [];
  questionsToDisplayEN: TrueOrFalse[] = [];
  questionsToDisplay: TrueOrFalse[] = [];
  questionsToCompare: TrueOrFalse[] = [];
  wrongQuestions: TrueOrFalse[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    value: new FormControl(null, Validators.required),
  })
  toggleForm: FormGroup = new FormGroup({
    toggle: new FormControl("PT", Validators.required)
  })
  result = false;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.generateQuestions();
    this.handleToggle();
  }

  handleToggle() {
    if(this.hasChanged !== 0) this.toggleForm.get('toggle').disable();
  }

  generateQuestions(){
    const count = 20;

    while(this.randomNumbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (124 - 1 + 1) + 1);
      if(!this.randomNumbers.includes(randomNumber)) this.randomNumbers.push(randomNumber)
    }
    
    this.randomNumbers.forEach(number => {
      this.questionsToDisplayPT.push(this.trueOrFalsePT.find(question => question.id === number))
      this.questionsToDisplayEN.push(this.trueOrFalseEN.find(question => question.id === number))
    })
    this.questionsToCompare = [...this.questionsToDisplayPT]
    this.questionsToDisplay = this.questionsToDisplayPT;
    this.wrongQuestions = this.questionsToCompare;
  }

  changeAnswers(event: any, id: number) {
    if(!this.checkedQuestion.find(identifier => identifier === id)) {
      this.hasChanged++;
      this.checkedQuestion.push(id);
    }
    this.hasChanged++;
    let question = this.questionsToCompare.find(question => question.id === id);

    if(event.value === question.value){
      if(this.controllerList.some((c: TrueOrFalse) => c.id === question.id)) return;
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
    this.handleToggle();
  }

  getToggleValue(ev: any) {
    this.questionsToDisplay = ev.value === "PT" ? this.questionsToDisplayPT : this.questionsToDisplayEN 
    this.questionsToCompare = ev.value === "PT" ? [...this.questionsToDisplayPT] : [...this.questionsToDisplayEN]
    this.wrongQuestions = this.questionsToCompare;
  }

  checkAnswer(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    this.result = true;

    localStorage.setItem("DAY", JSON.stringify(`${day}`));
    localStorage.setItem("MONTH", JSON.stringify(`${month}`));
    localStorage.setItem("YEAR", JSON.stringify(`${year}`));
    localStorage.setItem("ACERTOS", this.count.toString());
    localStorage.setItem("TENTATIVAS", this.questionsToDisplayPT.length.toString())
  } 

  backToTable(){
    this.randomNumbers = [];
    this.count = 0;
    this.questionsToDisplayPT = [];
    this.result = false;
    this.generateQuestions();
  }

  back() {
    this.router.navigate([''])
  }
}
