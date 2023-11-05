import { Router} from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  constructor() { }

  isSticky: boolean = false;
  elementPosition: any;

    ngOnInit(): void {
      
    }
    ngAfterViewInit(){
      this.elementPosition = this.menuElement.nativeElement.offsetTop;
    }
    
    @ViewChild ('stickyMenu') menuElement!: ElementRef;
    
        
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

}

