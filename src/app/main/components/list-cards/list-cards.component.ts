import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [],
  template: `
    <section class="content__list-cards">
      <div class="hover__bg">
        
      <div class="content__list">

      
        <article class="card__content">
          <header class="card__title">
            <h3 class="title">Titulo carta</h3>
            <ul class="items__group">
              <li class="items">
                <span> 31</span>
              </li>
              <li class="items">
                Raro
              </li>
              <li class="items">
                Ingles
              </li>
            </ul>

          </header>
          <footer class="card__info-group">
            <div class="card"></div>
            <div class="card__info">
              <h3>Set de la carta</h3>
              <span>Tipo</span> 
              <p>
                Raid -- attacked this turn, you 
                may pay U rather than pay this 
                spell’s mana cost.
              </p>
              
            </div>
          </footer>
        </article>
        <article class="card__content">
          <header class="card__title">
            <h3 class="title">Titulo carta</h3>
            <ul class="items__group">
              <li class="items">
                <span> 31</span>
              </li>
              <li class="items">
                Raro
              </li>
              <li class="items">
                Ingles
              </li>
            </ul>

          </header>
          <footer class="card__info-group">
            <div class="card"></div>
            <div class="card__info">
              <h3>Set de la carta</h3>
              <span>Tipo</span> 
              <p>
                Raid -- attacked this turn, you 
                may pay U rather than pay this 
                spell’s mana cost.
              </p>
              
            </div>
          </footer>
        </article>
        <article class="card__content">
          <header class="card__title">
            <h3 class="title">Titulo carta</h3>
            <ul class="items__group">
              <li class="items">
                <span> 31</span>
              </li>
              <li class="items">
                Raro
              </li>
              <li class="items">
                Ingles
              </li>
            </ul>

          </header>
          <footer class="card__info-group">
            <div class="card"></div>
            <div class="card__info">
              <h3>Set de la carta</h3>
              <span>Tipo</span> 
              <p>
                Raid -- attacked this turn, you 
                may pay U rather than pay this 
                spell’s mana cost.
              </p>
              
            </div>
          </footer>
        </article>
        <article class="card__content">
          <header class="card__title">
            <h3 class="title">Titulo carta</h3>
            <ul class="items__group">
              <li class="items">
                <span> 31</span>
              </li>
              <li class="items">
                Raro
              </li>
              <li class="items">
                Ingles
              </li>
            </ul>

          </header>
          <footer class="card__info-group">
            <div class="card"></div>
            <div class="card__info">
              <h3>Set de la carta</h3>
              <span>Tipo</span> 
              <p>
                Raid -- attacked this turn, you 
                may pay U rather than pay this 
                spell’s mana cost.
              </p>
              
            </div>
          </footer>
        </article>
        <article class="card__content">
          <header class="card__title">
            <h3 class="title">Titulo carta</h3>
            <ul class="items__group">
              <li class="items">
                <span> 31</span>
              </li>
              <li class="items">
                Raro
              </li>
              <li class="items">
                Ingles
              </li>
            </ul>

          </header>
          <footer class="card__info-group">
            <div class="card"></div>
            <div class="card__info">
              <h3>Set de la carta</h3>
              <span>Tipo</span> 
              <p>
                Raid -- attacked this turn, you 
                may pay U rather than pay this 
                spell’s mana cost.
              </p>
              
            </div>
          </footer>
        </article>
        </div>

      </div>
    </section>
  `,
  styles: `
  .content__list-cards{
    position: relative;
    background-image: url('public/main/bg-list-card.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
  }

  .hover__bg{
    padding: 3rem 7rem;
    gap: 2rem;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    height: auto;
  }

  .content__list{

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 8px;
    width: 100%;
    height: 100%;
  }

  .card__content{
    width: 600px;
    display: flex;
    flex-direction: column;
  }

  .card__title{
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: var(--text-color)
  }
  
  .title{
    width: 100%;
    font-size: 3rem;
    font-weight: 500;
    color: var(--text-color);
    margin:0.5rem 0;
  }

  .items__group {
  list-style-type: disc; 
  margin-left: 1rem; 
  display: flex; 
  gap: 2rem; 
}

.items {
  font-size: 1.2rem;
  display: list-item; 
  list-style-position: inside; 
}


  .card{
    width: 300px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  }

  .card__info-group{
   
    display: flex;
    flex-direction: row;
    gap : 10px;
    padding: 10px;
    color:var(--text-color);
  }

  .card__info{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


  `,
})
export class ListCardsComponent { }
