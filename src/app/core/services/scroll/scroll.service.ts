import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _scroll = 0;

  private _previosScroll = 0;

  saveScroll(scroll: number): void {
    this._scroll = scroll;
  }

  getScroll(): number {
    return this._scroll;
  }

  savePreviosScroll(scroll: number): void {
    this._previosScroll = scroll;
  }

  getPreviosScroll(): number {
    return this._previosScroll;
  }
}
