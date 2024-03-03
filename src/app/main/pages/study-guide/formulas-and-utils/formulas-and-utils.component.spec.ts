import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasAndUtilsComponent } from './formulas-and-utils.component';

describe('FormulasAndUtilsComponent', () => {
  let component: FormulasAndUtilsComponent;
  let fixture: ComponentFixture<FormulasAndUtilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulasAndUtilsComponent]
    });
    fixture = TestBed.createComponent(FormulasAndUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
