import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAterrizajeComponent } from './pagina-aterrizaje.component';

describe('PaginaAterrizajeComponent', () => {
  let component: PaginaAterrizajeComponent;
  let fixture: ComponentFixture<PaginaAterrizajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaAterrizajeComponent]
    });
    fixture = TestBed.createComponent(PaginaAterrizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
