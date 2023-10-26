import { Component, OnInit } from '@angular/core';
import { beerDataComparison } from 'src/shared/material/lists/beer-comparison';

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

  questionCompare = [
    {
      value: '50%',
      question: 'Describe the aroma, appearance, flavor and mouthfeel of each style according to the current BJCP Beer Style Guidelines.'
    },
    {
    value: '40%',
    question: 'Compare and contrast the three styles based on aspects such as ingredients, characteristics (e.g., aroma, appearance, flavor, mouthfeel, vital statistics, etc.), and background information (e.g., history, brewing processes, fermentation techniques, serving methods, etc.) that distinguish each style. '
    },
    {
    value: '10%',
    question: 'For each of the styles, name one commercial example as listed in the current BJCP Style Guidelines.'
    }
  ]

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
}
