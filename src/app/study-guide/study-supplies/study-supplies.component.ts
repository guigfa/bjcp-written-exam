import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ToolBarComponent } from 'src/app/toolbar/toolbar/toolbar.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { EnzimesComponent } from './enzimes/enzimes.component';
import { HopsComponent } from './hops/hops.component';
import { MaltComponent } from './malt/malt.component';
import { WaterComponent } from './water/water.component';
import { YeastComponent } from './yeast/yeast.component';

@Component({
  selector: 'app-study-supplies',
  templateUrl: './study-supplies.component.html',
  styleUrls: ['./study-supplies.component.scss'],
  standalone: true,
  imports: [EnzimesComponent, YeastComponent, WaterComponent, HopsComponent, MaltComponent, MaterialModule, ToolBarComponent, NgFor]
})
export class StudySuppliesComponent {

}
