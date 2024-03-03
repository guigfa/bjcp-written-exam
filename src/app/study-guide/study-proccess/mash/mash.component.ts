import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';

@Component({
  selector: 'app-mash',
  templateUrl: './mash.component.html',
  styleUrls: ['./mash.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class MashComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
