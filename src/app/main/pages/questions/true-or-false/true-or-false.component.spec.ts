import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueOrFalseComponent } from './true-or-false.component';

describe('TrueOrFalseComponent', () => {
  let component: TrueOrFalseComponent;
  let fixture: ComponentFixture<TrueOrFalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrueOrFalseComponent]
    });
    fixture = TestBed.createComponent(TrueOrFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
