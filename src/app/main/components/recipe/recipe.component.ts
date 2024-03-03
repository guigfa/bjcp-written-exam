import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  standalone: true,
  imports: [MaterialModule, NgFor]
})
export class RecipeComponent {

}
