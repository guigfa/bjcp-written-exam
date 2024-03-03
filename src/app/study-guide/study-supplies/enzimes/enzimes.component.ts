import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';

@Component({
  selector: 'app-enzimes',
  templateUrl: './enzimes.component.html',
  styleUrls: ['./enzimes.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class EnzimesComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
