import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffFlavorsComponent } from './on-off-flavors.component';

describe('OnOffFlavorsComponent', () => {
  let component: OnOffFlavorsComponent;
  let fixture: ComponentFixture<OnOffFlavorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnOffFlavorsComponent]
    });
    fixture = TestBed.createComponent(OnOffFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
