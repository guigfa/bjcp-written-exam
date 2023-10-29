import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { beerDataComparison } from 'src/shared/material/questions/beer-comparison';
import { S0, S0TITLE } from 'src/shared/material/questions/english-questionsMock';
import { S0PT, S0TITLEPT } from 'src/shared/material/questions/portuguese-questionsMock';

@Component({
  selector: 'app-style-comparison',
  templateUrl: './style-comparison.component.html',
  styleUrls: ['./style-comparison.component.scss']
})
export class StyleComparison implements OnInit {
  
  language: string = "PT";
  dataSource: any;
  blured: boolean = true;
  stylesToCompare: any[] = beerDataComparison;
  filteredStyles: any[] = [];
  randomNumbers: number[] = [];
  count = 2;
  toggleForm: FormGroup = new FormGroup({
    toggle: new FormControl([{value: "PT", disabled: !this.blured}, Validators.required]),
    blur: new FormControl([{value: null}])
  })
  styleColumns: string[] = [
    'id',
    'style1',
    'style2',
    'style3'
  ]
  questionColumns: string[] = [];
  questionEN = {
    QS0: S0,
    QS0TITLE: S0TITLE
  }
  questionPT = {
    QS0: S0PT,
    QS0TITLE: S0TITLEPT
  }

  constructor(private router: Router){}

  ngOnInit(): void {
    this.getIdsOfComparisons();
    this.dataSource = this.questionPT.QS0
    this.questionColumns = this.dataSource.map((element: any) => element.question);
  }

  getIdsOfComparisons() {
    while(this.randomNumbers.length < this.count) this.randomNumbers.push(Math.floor(Math.random() * (this.stylesToCompare.length))) 
    this.randomNumbers.sort((a, b) => a - b)

    this.randomNumbers.forEach(number => {
      this.filteredStyles.push(this.stylesToCompare[number]);
  })}

  getToggleValue(event: any) {
    this.language = event.value;
    this.language === "PT" ? this.dataSource = this.questionPT.QS0 : this.dataSource = this.questionEN.QS0
    this.questionColumns = this.dataSource.map((element: any) => element.question);
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
