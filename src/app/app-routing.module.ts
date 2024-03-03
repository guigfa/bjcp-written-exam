import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  {
    path: 'inicio', component: HomeComponent
  },
  { path: 'questoes',
  loadChildren: () => import('./main/pages/questions/questions.routing').then(m => m.QuestionsRoutingModule)
  },
  {
    path: 'guia-de-estudos',
    loadChildren: () => import('./main/pages/study-guide/study-guide.routing').then(m => m.StudyGuideRouting)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
