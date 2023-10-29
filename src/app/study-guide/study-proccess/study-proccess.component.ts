import { Component } from '@angular/core';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';

@Component({
  selector: 'app-study-proccess',
  templateUrl: './study-proccess.component.html',
  styleUrls: ['./study-proccess.component.scss']
})
export class StudyProccessComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
