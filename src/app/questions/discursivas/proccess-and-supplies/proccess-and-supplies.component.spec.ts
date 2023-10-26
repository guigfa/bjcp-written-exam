import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessAndSuppliesComponent } from './proccess-and-supplies.component';

describe('ProccessAndSuppliesComponent', () => {
  let component: ProccessAndSuppliesComponent;
  let fixture: ComponentFixture<ProccessAndSuppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProccessAndSuppliesComponent]
    });
    fixture = TestBed.createComponent(ProccessAndSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
