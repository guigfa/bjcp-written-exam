import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/app/shared/questions/questions-per-language';

@Component({
  selector: 'app-mouthfeel',
  templateUrl: './mouthfeel.component.html',
  styleUrls: ['./mouthfeel.component.scss'],
  imports: [MaterialModule, NgFor],
  standalone: true  
})
export class MouthfeelComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
