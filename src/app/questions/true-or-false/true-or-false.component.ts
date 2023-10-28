import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trueOrFalseMockEN, trueOrFalseMockPT } from 'src/shared/material/questions/true-or-false';

@Component({
  selector: 'app-true-or-false',
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.css']
})
export class TrueOrFalseComponent implements OnInit {


  trueOrFalsePT: any[] = trueOrFalseMockPT.questions;
  trueOrFalseEN: any[] = trueOrFalseMockEN.questions;
  trueOrFalse: any[] = [];
  count: number = 0;
  questionsColumns: string[] = [
    'value',
    'description'
  ]
  randomNumbers: number[] = [];
  controllerList: any[] = [];
  questionsToDisplayPT: any[] = [];
  questionsToDisplayEN: any[] = [];
  questionsToDisplay: any[] = [];
  questionsToCompare: any[] = [];
  wrongQuestions: any[] = [];
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
      this.questionsToDisplayPT.push(this.trueOrFalsePT.find(question => question.id === number))
      this.questionsToDisplayEN.push(this.trueOrFalseEN.find(question => question.id === number))
    })
    this.questionsToCompare = [...this.questionsToDisplayPT]
    this.questionsToDisplay = this.questionsToDisplayPT;
    this.wrongQuestions = this.questionsToCompare;
  }

  changeAnswers(event: any, id: number) {
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

  getToggleValue(ev: any) {
    this.questionsToDisplay = ev.value === "PT" ? this.questionsToDisplayPT : this.questionsToDisplayEN 
  }

  checkAnswer(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    this.result = true;

    localStorage.setItem("DATA", JSON.stringify(`${day}/${month}/${year}`))
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
