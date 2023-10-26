import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private router: Router){}

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
}
