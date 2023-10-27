import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyProccessComponent } from './study-proccess/study-proccess.component';
import { StudySuppliesComponent } from './study-supplies/study-supplies.component';
import { FormulasAndUtilsComponent } from './formulas-and-utils/formulas-and-utils.component';

const routes: Routes = [
  { path: '', redirectTo: 'guia-de-estudos', pathMatch: 'full' },
  {
    path: 'processos',
    component: StudyProccessComponent
  },
  {
    path: 'insumos',
    component: StudySuppliesComponent
  },
  {
    path: 'formulas',
    component: FormulasAndUtilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StudyGuideRouting { }


