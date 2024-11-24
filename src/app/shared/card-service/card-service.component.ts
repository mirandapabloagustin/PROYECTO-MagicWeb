import { Component, Input, input } from '@angular/core';

class service {
  title: string | null;
  description: string | null;
  icon: string | null;

  constructor(title: string, description: string, icon: string) {
    this.title = title ?? null;
    this.description = description ?? null;
    this.icon = icon ?? null;
  }
}

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {

@Input() service : service | undefined;



}
