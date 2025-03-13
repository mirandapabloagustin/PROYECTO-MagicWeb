import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _scroll = 0;

  private _previosScroll = 0;

  /**
   * @description
   * Metodo que guarda el scroll
   * @param { number } scroll - Scroll a guardar.
   * @returns { void } - No retorna nada.
   */
  saveScroll(scroll: number): void {
    this._scroll = scroll;
  }

  /**
   * @description
   * Metodo que obtiene el scroll
   * @returns { number } - Retorna el scroll.
   */
  getScroll(): number {
    return this._scroll;
  }

  /**
   * @description
   * Metodo que guarda el scroll previo
   * @param { number } scroll - Scroll previo a guardar.
   * @returns { void } - No retorna nada.
   */
  savePreviosScroll(scroll: number): void {
    this._previosScroll = scroll;
  }

  /**
   * @description
   * Metodo que obtiene el scroll previo
   * @returns { number } - Retorna el scroll previo.
   */
  getPreviosScroll(): number {
    return this._previosScroll;
  }

  /**
   * @description
   * Metodo que hace scroll al top
   * @returns { void } - No retorna nada.
   */
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  /**
   * @description
   * Metodo que hace scroll a un componente
   * @param { string } id - Id del componente al que se quiere hacer scroll.
   * @returns { void } - No retorna nada.
   */
  scrollToComponent(id: string): void {
    setTimeout(() => {
     const element = document.getElementsByClassName(id);
      element[0].scrollIntoView({ behavior: 'smooth' });
    },500);
  }

  
}
