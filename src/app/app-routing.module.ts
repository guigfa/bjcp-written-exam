import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  {
    path: 'inicio', component: MainPageComponent
  },
  { path: 'questoes',
  loadChildren: () => import('./questions/questions.routing').then(m => m.QuestionsRoutingModule)
  },
  {
    path: 'guia-de-estudos',
    loadChildren: () => import('./study-guide/study-guide.routing').then(m => m.StudyGuideRouting)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
