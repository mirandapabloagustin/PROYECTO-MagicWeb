import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


const COMPONENTS = [HeaderComponent, FooterComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-magic';
}
