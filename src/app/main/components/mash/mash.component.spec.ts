import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MashComponent } from './mash.component';

describe('MashComponent', () => {
  let component: MashComponent;
  let fixture: ComponentFixture<MashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MashComponent]
    });
    fixture = TestBed.createComponent(MashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
