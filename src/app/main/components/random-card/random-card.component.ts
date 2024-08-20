import { Component } from '@angular/core';
import { ButtonStyleComponent } from '@app/shared/button-style/button-style.component';

const IMPORTS = [ButtonStyleComponent];

@Component({
  selector: 'app-random-card',
  standalone: true,
  imports: [IMPORTS],
  template:`
  <div class="random__card">
    <div class="random__title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 64px; width: 64px;"><g class="" transform="translate(0,0)" style=""><path d="M255.76 44.764c-6.176 0-12.353 1.384-17.137 4.152L85.87 137.276c-9.57 5.536-9.57 14.29 0 19.826l152.753 88.36c9.57 5.536 24.703 5.536 34.272 0l152.753-88.36c9.57-5.535 9.57-14.29 0-19.825l-152.753-88.36c-4.785-2.77-10.96-4.153-17.135-4.153zm-117.313 82.61a31.953 18.96 0 0 1 .002 0 31.953 18.96 0 0 1 21.195 5.536 31.953 18.96 0 0 1-45.19 26.813 31.953 18.96 0 0 1 23.992-32.348zm118.24.245a31.953 18.96 0 0 1 22.125 32.362 31.953 18.96 0 1 1-45.187-26.812 31.953 18.96 0 0 1 23.06-5.55zm119.663.015a31.953 18.96 0 0 1 .002 0 31.953 18.96 0 0 1 21.195 5.535 31.953 18.96 0 0 1-45.19 26.812 31.953 18.96 0 0 1 23.993-32.347zM75.67 173.84c-5.753-.155-9.664 4.336-9.664 12.28v157.696c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.14 1.156 17.14-9.895V290.76c0-11.052-7.57-24.16-17.14-29.688l-146.93-84.847c-2.69-1.555-5.225-2.327-7.476-2.387zm360.773.002c-2.25.06-4.783.83-7.474 2.385l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.7c0 11.05 7.57 15.418 17.14 9.89L428.97 373.51c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c0-7.942-3.91-12.432-9.664-12.278zm-235.146 86.592a31.236 18.008 58.094 0 1 33.818 41.183 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zM366.82 289.1a18.008 31.236 31.906 0 1 .002 0 18.008 31.236 31.906 0 1 11.18 15.203 18.008 31.236 31.906 0 1-45 25.98A18.008 31.236 31.906 0 1 366.82 289.1zM89.297 318.48a31.236 18.008 58.094 0 1 33.818 41.184 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.204z" fill="#fff" fill-opacity="1"></path></g></svg>
        <span class="random__card-text">
            Encuentra inpiracion para tu proximo Mazo
        </span>
    </div>
    <app-button-style 
        text="CARTA RANDOM" 
        colorTextButton="var(--bg-black-color)"
        colorBackgroundButton="var(--text-color)"
        colorBorderButton="2px solid var(--border-color)"
        
        colorTextHover="var(--text-color)"
        colorBackgroundHover="var(--bg-black-color)"
        colorBorderHover="2px solid var(--border-color)"
    />
</div>

  `,
  styles: `
  .random__card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.random__title{
    display: flex;
    justify-content: center;
    align-items: center;
}


.random__card-text{
    font-size: 0.8rem;
    color: var(--text-color);
    text-align: center;
    padding: 5px;
}
  `
})
export class RandomCardComponent {

}
