import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() setColorText!: string;
  @Input() setColorBackground!: string;
  @Input() setColorBorder!: string;
  @Input() colorHover!: string;

  @Input() ChangeColorText!: string;
  @Input() ChangeColorBackground!: string;
  @Input() ChangeColorBorder!: string;

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.setColorText;
    this.el.nativeElement.style.backgroundColor = this.setColorBackground;
    this.el.nativeElement.style.border = this.setColorBorder;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.ChangeColorText, this.ChangeColorBackground, this.ChangeColorBorder);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(this.setColorText, this.setColorBackground, this.setColorBorder);
  }

  changeColor(colorText:string, colorBg: string , colorBorder: string) {
    this.el.nativeElement.style.color = colorText;
    this.el.nativeElement.style.backgroundColor = colorBg;
    this.el.nativeElement.style.border = colorBorder;
  }
}
