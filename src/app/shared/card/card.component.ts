import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  dataCard = {
    name: 'Name Card',
    lang: 'Español',
    normal_img: "https://cards.scryfall.io/normal/front/5/6/56ebc372-aabd-4174-a943-c7bf59e5028d.jpg?1562629953",
    mana_cost: "{1}{W}{W}",
    type: "Criatura",
    sub_type: "Ángel",
    rarity: "Rara",
    set: "M20",
    description:"Reveal Garbage Fire as you draft it and note how many cards you’ve drafted this draft round, including Garbage Fire.Garbage Fire deals damage to target creature equal to the highest number you noted for cards named Garbage Fire."

  };
}
