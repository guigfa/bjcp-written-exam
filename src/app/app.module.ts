import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/pages/home/home.component';
import { ProccessAndSuppliesComponent } from './main/pages/questions/discursivas/proccess-and-supplies/proccess-and-supplies.component';
import { StyleComparisonComponent } from './main/pages/questions/discursivas/style-comparison/style-comparison.component';
import { FullTestComponent } from './main/pages/questions/full-test/full-test.component';
import { TrueOrFalseComponent } from './main/pages/questions/true-or-false/true-or-false.component';
import { MaterialModule } from './shared/material/material.module';
import { ToolBarComponent } from './shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    TrueOrFalseComponent,
    StyleComparisonComponent,
    ProccessAndSuppliesComponent,
    FullTestComponent,
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ToolBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
