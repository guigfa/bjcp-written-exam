import { Component } from '@angular/core';
import { PORTUGUESE_QUESTIONS } from 'src/shared/material/questions/questions-array';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';

@Component({
  selector: 'app-study-supplies',
  templateUrl: './study-supplies.component.html',
  styleUrls: ['./study-supplies.component.scss']
})
export class StudySuppliesComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
