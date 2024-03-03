import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProccessAndSuppliesComponent } from './questions/discursivas/proccess-and-supplies/proccess-and-supplies.component';
import { StyleComparison } from './questions/discursivas/style-comparison/style-comparison.component';
import { FullTestComponent } from './questions/full-test/full-test.component';
import { TrueOrFalseComponent } from './questions/true-or-false/true-or-false.component';
import { FormulasAndUtilsComponent } from './study-guide/formulas-and-utils/formulas-and-utils.component';
import { StudyGuideComponent } from './study-guide/study-guide.component';
import { ToolBarComponent } from './toolbar/toolbar/toolbar.component';

@NgModule({
  declarations: [
    MainPageComponent,
    TrueOrFalseComponent,
    StyleComparison,
    ProccessAndSuppliesComponent,
    FullTestComponent,
    FormulasAndUtilsComponent,
    StudyGuideComponent,
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
