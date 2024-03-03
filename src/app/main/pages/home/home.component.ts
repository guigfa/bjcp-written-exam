import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  hits: number = Number(localStorage.getItem("ALL_HITS"));
  allQuestions: number = Number(localStorage.getItem("TOTAL_TRIES"));
  finishedComparison: number = Number(localStorage.getItem('COMPARACAO_FINALIZADA'))
  allComparisons: number = Number(localStorage.getItem('TOTAL_COMPARISON'));
  allDeployedTest: number = Number(localStorage.getItem('ALL_DEPLOYED_TEST'));
  deployedTest: number = Number(localStorage.getItem('DEPLOYED_TEST'));
  finishedTest: number = 0;
  detailedTries: any[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.getLocalStorage();
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
    this.allComparisons = 0;
    this.allDeployedTest = 0;
    this.detailedTries = [];
  }

  getLocalStorage(){
    const detailedTry = {
      day: parseFloat(localStorage.getItem('DAY')?.replace('"', '')),
      month: parseFloat(localStorage.getItem('MONTH')?.replace('"', '')),
      year: parseFloat(localStorage.getItem('YEAR')?.replace('"', '')),
      hits: Number(localStorage.getItem("ACERTOS")),
      total: Number(localStorage.getItem("TENTATIVAS"))
    }

    Object.values(detailedTry).some(val => isNaN(val)) 
      ? '' 
      : this.detailedTries.push(detailedTry); 

    Number(localStorage.getItem("ACERTOS")) 
      ? this.hits += Number(localStorage.getItem("ACERTOS")) 
      : '';

    Number(localStorage.getItem("TENTATIVAS")) 
      ? this.allQuestions += Number(localStorage.getItem("TENTATIVAS")) 
      : '';

    this.deployedTest ? this.allDeployedTest += this.deployedTest : '';
    this.finishedComparison ? this.allComparisons += this.finishedComparison : '';

    localStorage.clear();

  }

  setLocalStorage() {
    localStorage.setItem('TOTAL_COMPARISON', JSON.stringify(this.allComparisons))
    localStorage.setItem("TOTAL_DETAILED", JSON.stringify(this.detailedTries))
    localStorage.setItem("ALL_DEPLOYED_TEST", JSON.stringify(this.allDeployedTest));
    localStorage.setItem("ALL_HITS", this.hits.toString());
    localStorage.setItem("TOTAL_TRIES", this.allQuestions.toString())
    localStorage.setItem("DETAILED_TRIES", JSON.stringify(this.detailedTries))
  }

  ngOnDestroy(): void {
    this.setLocalStorage();
  }
}
