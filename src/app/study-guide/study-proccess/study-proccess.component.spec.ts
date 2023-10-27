import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProccessComponent } from './study-proccess.component';

describe('StudyProccessComponent', () => {
  let component: StudyProccessComponent;
  let fixture: ComponentFixture<StudyProccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyProccessComponent]
    });
    fixture = TestBed.createComponent(StudyProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
