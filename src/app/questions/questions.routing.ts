import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrueOrFalseComponent } from './true-or-false/true-or-false.component';
import { StyleComparison } from './discursivas/style-comparison/style-comparison.component';
import { ProccessAndSuppliesComponent } from './discursivas/proccess-and-supplies/proccess-and-supplies.component';
import { FullTestComponent } from './full-test/full-test.component';
const routes: Routes = [
  { path: '', redirectTo: 'verdadeiro-ou-falso', pathMatch: 'full' }, // Redireciona a raiz para 'verdadeiro-ou-falso'
  {
    path: 'verdadeiro-ou-falso',
    component: TrueOrFalseComponent,
  },
  {
    path: 'discursivas/comparacao',
    component: StyleComparison,
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


