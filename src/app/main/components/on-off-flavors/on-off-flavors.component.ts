import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/app/shared/questions/questions-per-language';

@Component({
  selector: 'app-on-off-flavors',
  templateUrl: './on-off-flavors.component.html',
  styleUrls: ['./on-off-flavors.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class OnOffFlavorsComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
