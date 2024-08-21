import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faFilter,
  faDroplet,
  faPalette,
  faLayerGroup,
  faFingerprint,
  faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { SearchComponent } from '../../../shared/search/search.component';
import { ButtonCleanComponent } from '../../../shared/button-clean/button-clean.component';
import { ButtonStyleComponent } from '../../../shared/button-style/button-style.component';
import { SelectStyleComponent } from '../../../shared/select-style/select-style.component';

import { CommonModule } from '@angular/common';
import { RandomCardComponent } from '../random-card/random-card.component';

const MODULES = [
  SearchComponent,
  ButtonCleanComponent,
  ButtonStyleComponent,
  FontAwesomeModule,
  SelectStyleComponent,
  CommonModule,
  RandomCardComponent,
];

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [...MODULES ],
  template: `
    <section class="content__main">
      <header class="content__main-header">
        <div class="filter__group">
          <h3 class="filter_title">¿Qué estás buscando?</h3>

          <div class="content__filter-action">
            <app-search (searchEvent)="handelSearch($event)" />

            <div class="more__options-group">
              <input
                class="options__input"
                type="checkbox"
                id="check__option"
                (click)="changeChechbox()"
              />
              <label class="options__label" for="check__option">
                <fa-icon class="options__icon" [icon]="icons[2]"></fa-icon>
              </label>
            </div>
          </div>
        </div>

        <div class="random__group">
          <app-random-card />
        </div>
      </header>

      <footer class="content__main-footer">
        <div class="content__more-options" (keyup.enter)="onSearchFilter()">
          @for (selection of selectsProperties; track $index) {
          <div class="content__option">
            <app-select-style
              [titleSelect]="selection.title"
              [textSelect]="selection.text"
              [icons]="selection.icon"
              [options]="selection.options"
              [aditionalOptions]="selection.more_options"
            ></app-select-style>
          </div>
          }
        </div>
      </footer>
    </section>
  `,
  styleUrl: './filter-panel.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FilterPanelComponent {
  chechbox = false;

  onSearchFilter() {
    console.log('Buscando...');
  }

  changeChechbox() {
    return !this.chechbox;
  }

  selectsProperties = [
    {
      icon: faPalette,
      title: 'Color',
      text: 'Seleccionar carta',
      options: ['Blanco', 'Azul', 'Negro', 'Rojo', 'Verde', 'Todos'],
      more_options: ['Con exactitud', 'Incluye algunos', 'Algunos de estos'],
    },
    {
      icon: faDroplet,
      title: 'Mana',
      text: 'Seleccionar mana',
      options: [
        '{W} - 1 maná blanco',
        '{U} - 1 maná azul',
        '{B} - 1 maná negro',
        '{R} - 1 maná rojo',
        '{G} - 1 maná verde',
        '{C} - 1 maná incoloro',
        '{X} - X maná genérico',
        '{0} - 0 maná',
        '{1} - 1 maná genérico',
        '{2} - 2 maná genérico',
        '{3} - 3 maná genérico',
        '{4} - 4 maná genérico',
        '{5} - 5 maná genérico',
        '{6} - 6 maná genérico',
        '{7} - 7 maná genérico',
        '{8} - 8 maná genérico',
        '{9} - 9 maná genérico',
        '{10} - 10 maná genérico',
        '{11} - 11 maná genérico',
        '{12} - 12 maná genérico',
        '{13} - 13 maná genérico',
        '{14} - 14 maná genérico',
        '{15} - 15 maná genérico',
        '{16} - 16 maná genérico',
        '{W/U} - 1 maná blanco o azul',
        '{W/B} - 1 maná blanco o negro',
        '{B/R} - 1 maná negro o rojo',
        '{B/G} - 1 maná negro o verde',
        '{U/B} - 1 maná azul o negro',
        '{U/R} - 1 maná azul o rojo',
        '{R/G} - 1 maná rojo o verde',
        '{R/W} - 1 maná rojo o blanco',
        '{G/W} - 1 maná verde o blanco',
        '{G/U} - 1 maná verde o azul',
        '{G/U/P} - 1 maná verde, 1 maná azul o 2 vidas',
        '{G/W/P} - 1 maná verde, 1 maná blanco o 2 vidas',
        '{C/W} - 1 maná incoloro o 1 maná blanco',
        '{C/U} - 1 maná incoloro o 1 maná azul',
        '{C/B} - 1 maná incoloro o 1 maná negro',
        '{C/R} - 1 maná incoloro o 1 maná rojo',
        '{C/G} - 1 maná incoloro o 1 maná verde',
        '{2/W} - 2 maná genérico o 1 maná blanco',
        '{2/U} - 2 maná genérico o 1 maná azul',
        '{2/B} - 2 maná genérico o 1 maná negro',
        '{2/R} - 2 maná genérico o 1 maná rojo',
        '{2/G} - 2 maná genérico o 1 maná verde',
        '{W/P} - 1 maná blanco o 2 vidas',
        '{U/P} - 1 maná azul o 2 vidas',
        '{B/P} - 1 maná negro o 2 vidas',
        '{R/P} - 1 maná rojo o 2 vidas',
        '{G/P} - 1 maná verde o 2 vidas',
        '{S} - 1 maná de nieve',
      ],
    },
    {
      icon: faFingerprint,
      title: 'Tipo',
      text: 'Tipo de carta',
      options: [
        'Artifact',
        'Basic',
        'Battle',
        'Conspiracy',
        'Creature',
        'Dungeon',
        'Eaturecray',
        'Enchantment',
        'Ever',
        'Host',
        'Instant',
        'Kindred',
        'Land',
        'Legendary',
        'Ongoing',
        'Phenomenon',
        'Plane',
        'Planeswalker',
        'Scariest',
        'Scheme',
        'See',
        'Snow',
        'Sorcery',
        'Summon',
        'Tribal',
        'Vanguard',
        'World',
        "You'll",
      ],
    },
    {
      icon: faLayerGroup,
      title: 'Formato',
      text: 'Formato carta',
      options: [
        'Alchemy',
        'Brawl',
        'Commander',
        'Explorer',
        'Historic',
        'Legacy',
        'Modern',
        'Pauper',
        'Pioneer',
        'Standard',
        'Vintage',
      ],
    },

    {
      icon: faInbox,
      title: 'Sets',
      text: 'Seleccionar set',
      options: [
        'Adventures in the Forgotten Realms',
        'Adventures in the Forgotten Realms Commander',
        'Aether Revolt',
        'Alara Reborn',
        "Alchemy Horizons: Baldur's Gate",
        'Alliances',
        'Amonkhet',
        'Amonkhet Remastered',
        'Antiquities',
        'Apocalypse',
        'Arabian Nights',
        'Archenemy',
        'Archenemy: Nicol Bolas',
        'Arena Base Set',
        "Assassin's Creed",
        'Avacyn Restored',
        'Battle for Zendikar',
        'Battle Royale Box Set',
        'Battlebond',
        'Beatdown Box Set',
        'Betrayers of Kamigawa',
        'Bloomburrow',
        'Bloomburrow Commander',
        'Born of the Gods',
        'Champions of Kamigawa',
        'Chronicles',
        'Classic Sixth Edition',
        'Coldsnap',
        'Commander 2013 Edition',
        'Commander 2014',
        'Commander 2015',
        'Commander 2016',
        'Commander 2017',
        'Commander 2018',
        'Commander 2019',
        'Commander 2021',
        'Commander Anthology',
        'Commander Anthology 2018',
        'Commander Collection: Green',
        'Commander Legends',
        "Commander Legends: Battle for Baldur's Gate",
        'Commander Masters',
        "Commander's Arsenal",
        'Conflux',
        'Conspiracy: Take the Crown',
        'Core Set 2019',
        'Core Set 2020',
        'Core Set 2021',
        'Dark Ascension',
        'Darksteel',
        'Dissension',
        'Doctor Who Commander',
        'Dominaria',
        'Dominaria Remastered',
        'Dominaria United',
        'Dominaria United Commander',
        'Double Masters',
        'Double Masters 2022',
        "Dragon's Maze",
        'Dragons of Tarkir',
        'Duel Decks Anthology, Divine vs. Demonic',
        'Duel Decks Anthology, Elves vs. Goblins',
        'Duel Decks Anthology, Garruk vs. Liliana',
        'Duel Decks Anthology, Jace vs. Chandra',
        'Duel Decks: Ajani vs. Nicol Bolas',
        'Duel Decks: Blessed vs. Cursed',
        'Duel Decks: Divine vs. Demonic',
        'Duel Decks: Elspeth vs. Kiora',
        'Duel Decks: Elspeth vs. Tezzeret',
        'Duel Decks: Elves vs. Goblins',
        'Duel Decks: Elves vs. Inventors',
        'Duel Decks: Garruk vs. Liliana',
        'Duel Decks: Heroes vs. Monsters',
        'Duel Decks: Izzet vs. Golgari',
        'Duel Decks: Jace vs. Chandra',
        'Duel Decks: Jace vs. Vraska',
        'Duel Decks: Knights vs. Dragons',
        'Duel Decks: Merfolk vs. Goblins',
        'Duel Decks: Mind vs. Might',
        'Duel Decks: Nissa vs. Ob Nixilis',
        'Duel Decks: Phyrexia vs. the Coalition',
        'Duel Decks: Sorin vs. Tibalt',
        'Duel Decks: Speed vs. Cunning',
        'Duel Decks: Venser vs. Koth',
        'Duel Decks: Zendikar vs. Eldrazi',
        'Eighth Edition',
        'Eldritch Moon',
        'Eternal Masters',
        'Eventide',
        'Exodus',
        'Explorers of Ixalan',
        'Fallen Empires',
        'Fate Reforged',
        'Fifth Dawn',
        'Fifth Edition',
        'Fourth Edition',
        'From the Vault: Angels',
        'From the Vault: Annihilation (2014)',
        'From the Vault: Dragons',
        'From the Vault: Exiled',
        'From the Vault: Legends',
        'From the Vault: Lore',
        'From the Vault: Realms',
        'From the Vault: Relics',
        'From the Vault: Transform',
        'From the Vault: Twenty',
        'Future Sight',
        'Game Night',
        'Game Night 2019',
        'Game Night: Free-For-All',
        'Gatecrash',
        'Gift Pack',
        'Global Series: Jiang Yanggu and Mu Yanling',
        'Guild Kit: Azorius',
        'Guild Kit: Boros',
        'Guild Kit: Dimir',
        'Guild Kit: Golgari',
        'Guild Kit: Gruul',
        'Guild Kit: Izzet',
        'Guild Kit: Orzhov',
        'Guild Kit: Rakdos',
        'Guild Kit: Selesnya',
        'Guild Kit: Simic',
        'Guildpact',
        'Guilds of Ravnica',
        'Guilds of Ravnica Mythic Edition',
        'Historic Anthology 1',
        'Historic Anthology 2',
        'Historic Anthology 3',
        'Historic Anthology 4',
        'Historic Anthology 5',
        'Homelands',
        'Hour of Devastation',
        'Ice Age',
        'Iconic Masters',
        'Ikoria Commander',
        'Ikoria: Lair of Behemoths',
        'Innistrad',
        'Innistrad: Crimson Vow',
        'Innistrad: Crimson Vow Commander',
        'Innistrad: Midnight Hunt',
        'Innistrad: Midnight Hunt Alchemy',
        'Innistrad: Midnight Hunt Commander',
        'Invasion',
        'Ixalan',
        'Journey into Nyx',
        'Judgment',
        'Jumpstart',
        'Jumpstart 2022',
        'Jumpstart: Historic Horizons',
        'Jurassic World Collection Cards',
        'Kaladesh',
        'Kaladesh Remastered',
        'Kaldheim',
        'Kaldheim Commander',
        'Kamigawa: Neon Dynasty',
        'Kamigawa: Neon Dynasty Alchemy',
        'Kamigawa: Neon Dynasty Commander',
        'Khans of Tarkir',
        'Legends',
        'Legions',
        'Limited Edition Alpha',
        'Limited Edition Beta',
        'Lorwyn',
        'Magic 2010',
        'Magic 2011',
        'Magic 2012',
        'Magic 2013',
        'Magic 2014 Core Set',
        'Magic 2015 Core Set',
        'Magic Origins',
        'Magic The Gathering—Fallout',
        'Magic: The Gathering-Commander',
        'Magic: The Gathering—Conspiracy',
        'March of the Machine',
        'March of the Machine Commander',
        'March of the Machine Multiverse Legends',
        'March of the Machine: The Aftermath',
        'Masterpiece Series: Amonkhet Invocations',
        'Masterpiece Series: Kaladesh Inventions',
        'Masters 25',
        'Masters Edition',
        'Masters Edition II',
        'Masters Edition III',
        'Masters Edition IV',
        'Mercadian Masques',
        'Mirage',
        'Mirrodin',
        'Mirrodin Besieged',
        'Modern Event Deck 2014',
        'Modern Horizons',
        'Modern Horizons 2',
        'Modern Horizons 3',
        'Modern Horizons 3 Commander',
        'Modern Masters',
        'Modern Masters 2015 Edition',
      ],
    },
  ];

  icons = [faBars, faDroplet, faFilter];
  @Output() searchUserEvent = new EventEmitter<string>();

  handelSearch(searchCard: string) {
    this.searchUserEvent.emit(searchCard);
  }
}