import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToolBarComponent } from './toolbar/toolbar/toolbar.component';
import { StyleComparison } from './questions/discursivas/style-comparison/style-comparison.component';
import { ProccessAndSuppliesComponent } from './questions/discursivas/proccess-and-supplies/proccess-and-supplies.component';
import { TrueOrFalseComponent } from './questions/true-or-false/true-or-false.component';
import { FullTestComponent } from './questions/full-test/full-test.component';
import { StudyGuideComponent } from './study-guide/study-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolBarComponent,
    TrueOrFalseComponent,
    StyleComparison,
    ProccessAndSuppliesComponent,
    FullTestComponent,
    StudyGuideComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
