import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MashComponent } from 'src/app/main/components/mash/mash.component';
import { MouthfeelComponent } from 'src/app/main/components/mouthfeel/mouthfeel.component';
import { OnOffFlavorsComponent } from 'src/app/main/components/on-off-flavors/on-off-flavors.component';
import { TechniquesComponent } from 'src/app/main/components/techniques/techniques.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PORTUGUESEQUESTIONS } from 'src/app/shared/questions/questions-per-language';

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
