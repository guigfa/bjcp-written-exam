import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/app/shared/questions/questions-per-language';

@Component({
  selector: 'app-yeast',
  templateUrl: './yeast.component.html',
  styleUrls: ['./yeast.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class YeastComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
