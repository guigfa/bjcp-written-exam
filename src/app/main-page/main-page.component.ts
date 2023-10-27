import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  acertos: number = Number(localStorage.getItem("TOTAL_ACERTOS"));
  tentativasTotais: number = Number(localStorage.getItem("TOTAL_TENTATIVAS"));
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
    Number(localStorage.getItem("ACERTOS")) ? this.acertos += Number(localStorage.getItem("ACERTOS")) : ''
    Number(localStorage.getItem("TENTATIVAS")) ? this.tentativasTotais += Number(localStorage.getItem("TENTATIVAS")) : ''

  }

  generateTest() {
    this.router.navigate(['/questoes/discursivas/comparacao'])
  }

  generateTrueOrFalse() {
    this.router.navigate(['/questoes'])
  }

  generateMaterialsAndProccessTest() {
    this.router.navigate(['/questoes/discursivas/insumos-e-processos'])
  }

  generateFullTest() {
    
  }

  cleanResults() {
    localStorage.clear();
    this.acertos = 0;
    this.tentativasTotais = 0;
    console.log(Number(localStorage.getItem("ACERTOS")))
    console.log(Number(localStorage.getItem("TENTATIVAS")))
  }

  ngOnDestroy(): void {
    localStorage.setItem("TOTAL_DETALHADO", JSON.stringify(this.detailedTries))
    localStorage.setItem("TOTAL_ACERTOS", this.acertos.toString());
    localStorage.setItem("TOTAL_TENTATIVAS", this.tentativasTotais.toString())
  }
}
