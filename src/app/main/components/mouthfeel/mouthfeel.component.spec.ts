import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouthfeelComponent } from './mouthfeel.component';

describe('MouthfeelComponent', () => {
  let component: MouthfeelComponent;
  let fixture: ComponentFixture<MouthfeelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouthfeelComponent]
    });
    fixture = TestBed.createComponent(MouthfeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
