import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  hits: number = Number(localStorage.getItem("TOTAL_ACERTOS"));
  allQuestions: number = Number(localStorage.getItem("TOTAL_TENTATIVAS"));
  deployedTest: number = 0;
  finishedTest: number = 0;
  detailedTries: any[] = []


  constructor(private router: Router){}

  ngOnInit(): void {
    this.getLocalStorage();
  }
  getLocalStorage(){
    this.detailedTries.push({
      data: localStorage.getItem('DATA'),
      hits: Number(localStorage.getItem("ACERTOS")),
      total: Number(localStorage.getItem("TENTATIVAS"))
    })
    Number(localStorage.getItem("ACERTOS")) ? this.hits += Number(localStorage.getItem("ACERTOS")) : ''
    Number(localStorage.getItem("TENTATIVAS")) ? this.allQuestions += Number(localStorage.getItem("TENTATIVAS")) : ''
    let jsonString = localStorage.getItem("TOTAL_DETALHADO");
    let formatted: any = jsonString?.replace(/\\"/g, '"');

    jsonString = formatted.substring(1, formatted.length - 1);
    console.log(JSON.parse(jsonString))
    localStorage.clear();

  }

  generateComparisonTest() {
    this.router.navigate(['/questoes/discursivas/comparacao'])
  }

  generateTrueOrFalseTest() {
    this.router.navigate(['/questoes'])
  }

  generateMaterialsAndProccessTest() {
    this.router.navigate(['/questoes/discursivas/insumos-e-processos'])
  }

  generateFullTest() {
    this.router.navigate(['questoes/prova-completa'])
  }

  cleanResults() {
    localStorage.clear();
    this.hits = 0;
    this.allQuestions = 0;
    console.log(Number(localStorage.getItem("ACERTOS")))
    console.log(Number(localStorage.getItem("TENTATIVAS")))
  }

  ngOnDestroy(): void {
    localStorage.setItem("TOTAL_DETALHADO", JSON.stringify(this.detailedTries))
    console.log(localStorage.getItem("TOTAL_DETALHADO"))
    localStorage.setItem("TOTAL_ACERTOS", this.hits.toString());
    localStorage.setItem("TOTAL_TENTATIVAS", this.allQuestions.toString())
  }
}
