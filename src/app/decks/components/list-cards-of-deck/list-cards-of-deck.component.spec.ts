import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardsOfDeckComponent } from './list-cards-of-deck.component';

describe('ListCardsOfDeckComponent', () => {
  let component: ListCardsOfDeckComponent;
  let fixture: ComponentFixture<ListCardsOfDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardsOfDeckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardsOfDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
