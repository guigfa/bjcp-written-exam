import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EnzimesComponent } from 'src/app/main/components/enzimes/enzimes.component';
import { HopsComponent } from 'src/app/main/components/hops/hops.component';
import { MaltComponent } from 'src/app/main/components/malt/malt.component';
import { WaterComponent } from 'src/app/main/components/water/water.component';
import { YeastComponent } from 'src/app/main/components/yeast/yeast.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ToolBarComponent } from 'src/app/shared/toolbar/toolbar.component';

@Component({
  selector: 'app-study-supplies',
  templateUrl: './study-supplies.component.html',
  styleUrls: ['./study-supplies.component.scss'],
  standalone: true,
  imports: [EnzimesComponent, YeastComponent, WaterComponent, HopsComponent, MaltComponent, MaterialModule, ToolBarComponent, NgFor]
})
export class StudySuppliesComponent {

}
