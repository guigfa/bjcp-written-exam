import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolBarComponent {

  constructor(private router: Router){}

  redirectToMainPage() {
    this.router.navigate([''])
  }

  goToProccessStudyGuide() {
    this.router.navigate(['/guia-de-estudos/processos'])
  }

  goToSuppliesStudyGuide() {
    this.router.navigate(['/guia-de-estudos/insumos'])
  }

  goToFormulasStudyGuide(){
    this.router.navigate(['/guia-de-estudos/formulas'])
  }
}
