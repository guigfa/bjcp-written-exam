import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';

@Component({
  selector: 'app-hops',
  templateUrl: './hops.component.html',
  styleUrls: ['./hops.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class HopsComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
