import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '@app/core/directive/button.directive';

const IMPORT_MODULES = [CommonModule, ButtonDirective];

@Component({
  selector: 'app-button-style',
  standalone: true,
  imports: [IMPORT_MODULES],
  template: `
    <button class="button__group-style"
    appButton 
    [setColorText]="colorTextButton"
    [setColorBackground]="colorBackgroundButton"
    [setColorBorder]="colorBorderButton"
    [ChangeColorText]="colorTextHover"
    [ChangeColorBackground]="colorBackgroundHover"
    [ChangeColorBorder]="colorBorderHover"
    >
      <span class="button__text">
        {{ text }}
      </span>
    </button>
  `,
  styles: `
    .button__group-style {
      font-size: 0.8rem;
      font-weight: 500;
      padding: 1rem 2rem;
      border-radius: 2rem;
      transition: 0.3s;
    }
    .button__text {
      font-size: 1rem;
      font-weight: 700;
    }
  `,
})

export class ButtonStyleComponent{
  @Input() colorTextButton!:string;
  @Input() colorBackgroundButton!:string;
  @Input() colorBorderButton!: string;

  @Input() colorTextHover!:string;
  @Input() colorBackgroundHover!:string;
  @Input() colorBorderHover!: string;


  @Input({required:true}) text!: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
