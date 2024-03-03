import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/shared/material/questions/questions-per-language';
import { MashComponent } from './mash/mash.component';
import { MouthfeelComponent } from './mouthfeel/mouthfeel.component';
import { OnOffFlavorsComponent } from './on-off-flavors/on-off-flavors.component';
import { TechniquesComponent } from './techniques/techniques.component';

@Component({
  selector: 'app-study-proccess',
  templateUrl: './study-proccess.component.html',
  styleUrls: ['./study-proccess.component.scss'],
  standalone: true,
  imports: [MaterialModule, MashComponent, NgFor, TechniquesComponent, MouthfeelComponent, OnOffFlavorsComponent]
})
export class StudyProccessComponent {
  PORTUGUESEQUESTIONS = PORTUGUESEQUESTIONS;
}
