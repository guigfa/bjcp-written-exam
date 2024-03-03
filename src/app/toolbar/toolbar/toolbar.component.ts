import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatMenuModule]
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
