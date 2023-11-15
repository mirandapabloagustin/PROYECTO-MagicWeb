import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckShowComponent } from './deck-show.component';

describe('DeckShowComponent', () => {
  let component: DeckShowComponent;
  let fixture: ComponentFixture<DeckShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckShowComponent]
    });
    fixture = TestBed.createComponent(DeckShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
