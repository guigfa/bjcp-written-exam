import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyGuideComponent } from './study-guide.component';

describe('StudyGuideComponent', () => {
  let component: StudyGuideComponent;
  let fixture: ComponentFixture<StudyGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyGuideComponent]
    });
    fixture = TestBed.createComponent(StudyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
