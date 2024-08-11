import { Component } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FilterPanelComponent],
  template: `
    <main>
      <app-filter-panel />
    </main>
  `,
  styles: ``
})
export class MainComponent {

}
