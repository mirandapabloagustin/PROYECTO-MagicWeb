import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css'
})
export class EmptyComponent {
  @Input() message: string | undefined;
  @Input() title: string | undefined;

}
