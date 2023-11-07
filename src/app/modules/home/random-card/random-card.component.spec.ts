import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCardComponent } from './random-card.component';

describe('RandomCardComponent', () => {
  let component: RandomCardComponent;
  let fixture: ComponentFixture<RandomCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCardComponent]
    });
    fixture = TestBed.createComponent(RandomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
