import { Component, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const IMPORTS_MODULES = [
  FontAwesomeModule,
];

@Component({
  selector: 'app-select-style',
  standalone: true,
  imports: [...IMPORTS_MODULES],
  template: `
    
      <div class="select__option-group">
        <div class="select__text">
          <fa-icon class="select__option-icon" [icon]="icons"></fa-icon>
          <label class="select__option-label" for="option_user_select">
            {{titleSelect}}</label>
        </div>
        <div class="select__option-select-options">
          <select class="select__option-select" id="option_user_select">
            <option value="" disabled selected>{{textSelect}}</option>
            @for (option of options ;track $index){
              <option value="{{option}}">{{option}}</option>
            }
          </select>
          @if(aditionalOptions){
            <select class="select__option-select" id="option_user_select">
             @for (aditional_option of aditionalOptions ;track $index){
              <option value="{{aditional_option}}">{{aditional_option}}</option>
            }
          </select>
          }
        </div>
      </div>
    `,
  styles: [`


.select__option-group{
    display: flex;
    flex-direction: column;
    line-height: 2.5rem;
    align-items: start;
}

.select__text{
    color: var(--text-color);
    font-size: 1.2rem;
}

.select__option-select-options{
  width: 100%;
  display: flex;
  gap: 1rem;
}

.select__option-select{
    width: 100%; 
    background-color: var(--text-color); 
    border: 2px solid var(--border-color);
    border-radius: 5px; 
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 45px 0 10px;
    transition: .3s ease all;
}

.select__option-select:focus{
    outline: none; 
}
    

    `],	
})
export class SelectStyleComponent {
  @Input() icons: any;
  @Input() titleSelect!: string;
  @Input() textSelect!: string;
  @Input() options?: string[] =[];
  @Input() aditionalOptions?: string[] =[];
  @Output() selectOption!: string;
}
