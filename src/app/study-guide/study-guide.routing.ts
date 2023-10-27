import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyGuideComponent } from './study-guide.component';

const routes: Routes = [
  { path: '', redirectTo: 'guia-de-estudos', pathMatch: 'full' },
  {
    path: 'guia-de-estudos',
    component: StudyGuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StudyGuideRouting { }


