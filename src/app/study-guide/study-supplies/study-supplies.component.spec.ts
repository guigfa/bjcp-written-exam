import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySuppliesComponent } from './study-supplies.component';

describe('StudySuppliesComponent', () => {
  let component: StudySuppliesComponent;
  let fixture: ComponentFixture<StudySuppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudySuppliesComponent]
    });
    fixture = TestBed.createComponent(StudySuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
