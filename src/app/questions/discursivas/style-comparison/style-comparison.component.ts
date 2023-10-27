import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { beerDataComparison } from 'src/shared/material/questions/beer-comparison';
import { S0, S0TITLE } from 'src/shared/material/questions/questions';

@Component({
  selector: 'app-style-comparison',
  templateUrl: './style-comparison.component.html',
  styleUrls: ['./style-comparison.component.css']
})
export class StyleComparison implements OnInit {
  
  stylesToCompare: any[] = beerDataComparison;
  filteredStyles: any[] = [];
  randomNumbers: number[] = [];
  count = 2;
  styleColumns: string[] = [
    'id',
    'style1',
    'style2',
    'style3'
  ]
  questionColumns: string[] = [
    'value',
    'question'
  ];
  QS0 = S0;
  QS0TITLE = S0TITLE

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.getIdsOfComparisons();
  }

  getIdsOfComparisons() {
    while(this.randomNumbers.length < this.count) this.randomNumbers.push(Math.floor(Math.random() * (91 - 1 + 1) + 1)) 
    this.randomNumbers.sort((a, b) => a - b)

    this.randomNumbers.forEach(number => {
      if(!this.stylesToCompare.find(style => style.id === number)) this.getIdsOfComparisons();
      this.filteredStyles.push(this.stylesToCompare.find(style => style.id === number));
  })}

  back(){
    this.router.navigate(['']);
  }
}
