import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  { path: 'questoes',
  loadChildren: () => import('./questions/questions.routing').then(m => m.QuestionsRoutingModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
