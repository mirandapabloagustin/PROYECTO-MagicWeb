import { Component, ViewEncapsulation } from '@angular/core';
import {
  faHatWizard,
  faAddressCard,
  faLaptopCode,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';



const COMPONENTS = [FontAwesomeModule, RouterLink];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [COMPONENTS],
  template: `
    <header>
      <nav>
        <img routerLink="landing" src="header/logo.webp" alt="" />
        <input type="checkbox" id="check" />
        <label for="check">
          <fa-icon [icon]="icons[3]"></fa-icon>
        </label>

        <ul>
          <li>
            <a href="#" class="link"
              ><fa-icon [icon]="icons[0]"></fa-icon> sobre Magic</a
            >
          </li>
          <li>
            <a href="about" class="link"
              ><fa-icon [icon]="icons[1]"></fa-icon> nosotros</a
            >
          </li>
          <li>
            <a href="#" class="login"
              ><fa-icon [icon]="icons[2]"></fa-icon> Ingresar</a
            >
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    header{
      position: fixed;
      z-index: 1000;
      width: 100%;
    }

    img{
      background-size: contain;
      background-repeat: no-repeat;
      height: 60px;
      margin-left: 30px;
      cursor: pointer;
    }

    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--bg-black-color);
      height: 80px;
      width: 100%;
    }

    nav ul{
      float: right;
      margin-right: 20px;
    }

    nav ul li{
      display: inline-block;
      line-height: 80px;
      margin: 0 5px;
    }

    a{
      color: var(--text-color);
      font-size: 18px;
      padding: 7px 13px;
      text-transform: uppercase;
    }

    .link:hover{
      transition: .3s
      cursor: pointer;
      transition: 0.2s;
      border-bottom: 2px solid rgb(86, 180, 124);

      padding-bottom: 5px;
    }

    .login{
      background-color: var(--bg-green-color);
      border-radius: 5px;
      padding: 7px 20px;
      font-weight: bold;
    }

    .login:hover{
      background-color: var(--text-color);
      color: var(--bg-color-buttom-emeralt);
      font-weight: bold;
      transition: .5s
      cursor: pointer;
    }

    label{
      float: right;
      font-size: 30px;
      color: var(--text-color);
      line-height: 80px;
      margin-right: 20px;
      cursor: pointer;
      display: none;
    }

    #check{
      display: none;
    }

    @media (max-width: 952px){
      img{
        margin: 0;
      }

      label{
        display: block;
      }

      nav{
        padding: 0 20px 0 20px;
      }

      nav ul{
        position: fixed;
        width: 50%;
        height: 100vh;
        background-color: var(--bg-black-color);
        top: 80px;
        right: -100%;
        text-align: center;
        transition: all .5s;
        margin:0;
      }

      nav ul li{
        display: block;
        margin: 50px 0;
        line-height: 30px;
      }

      nav ul li a{
        font-size: 20px;
      }

      #check:checked ~ ul{
        right: 0;
      }
    }





  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {
  icons = [faHatWizard, faLaptopCode, faAddressCard, faBars];
}
