import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProccessAndSuppliesComponent } from './discursivas/proccess-and-supplies/proccess-and-supplies.component';
import { StyleComparisonComponent } from './discursivas/style-comparison/style-comparison.component';
import { FullTestComponent } from './full-test/full-test.component';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';
const routes: Routes = [
  { path: '', redirectTo: 'verdadeiro-ou-falso', pathMatch: 'full' }, 
  {
    path: 'verdadeiro-ou-falso',
    component: TrueOrFalseComponent,
  },
  {
    path: 'discursivas/comparacao',
    component: StyleComparisonComponent,
  },
  {
    path: 'discursivas/insumos-e-processos',
    component: ProccessAndSuppliesComponent,
  },
  {
    path: 'prova-completa',
    component: FullTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class QuestionsRoutingModule { }


