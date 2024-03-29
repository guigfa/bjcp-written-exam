import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/app/shared/questions/questions-per-language';

@Component({
  selector: 'app-malt',
  templateUrl: './malt.component.html',
  styleUrls: ['./malt.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor, MatExpansionModule],
})
export class MaltComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;

}
