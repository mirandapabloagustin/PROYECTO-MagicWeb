import { IMana } from '@interfaces/mana.interface';

export class Mana {
    src: string;
    alt: string;
    index: number;
    
    constructor(manaCost?: IMana) {
        this.src = manaCost?.src ?? '';
        this.alt = manaCost?.alt ?? '';
        this.index = manaCost?.index ?? 0;
    }
}