import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class TechniquesComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
