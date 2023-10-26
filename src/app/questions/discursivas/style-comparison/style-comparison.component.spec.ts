import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleComparison } from './style-comparison.component';

describe('StyleComparison', () => {
  let component: StyleComparison;
  let fixture: ComponentFixture<StyleComparison>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleComparison]
    });
    fixture = TestBed.createComponent(StyleComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
