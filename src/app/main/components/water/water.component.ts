import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/app/shared/questions/questions-per-language';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class WaterComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
