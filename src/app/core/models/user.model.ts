import { Iuser } from "../interfaces/user.interface";

export class User implements Iuser {
    id: string | null;
    nick: string | null;
    name: string | null;
    email: string | null;
    imgUri: string | null;
    password: string | null;
    description: string | null;
    country: string | null;
    favCards: any[] | null;
    status: boolean | undefined;

    constructor(user?: Iuser) {
        this.id = user?.id == undefined ? '' : user.id;
        this.nick = user?.nick == undefined ? '' : user.nick;
        this.name = user?.name == undefined ? '' : user.name;
        this.email = user?.email == undefined ? '' : user.email;
        this.imgUri = 'https://cards.scryfall.io/art_crop/front/c/f/cf1d17e4-a201-4511-b4bf-7c672728de4b.jpg?1730249713';
        this.password = user?.password == undefined ? '' : user.password;
        this.description = "Amante de Magic: The Gathering, siempre en busca de nuevos mazos y estrategias. Mi color favorito de maná es [Inserta tu color aquí] y disfruto jugando con [tu tipo de mazo o comandante favorito]. ¡Vamos a jugar y compartir ideas sobre este increíble juego!";
        this.country = user?.country == undefined ? '' : user.country;
        this.favCards = user?.favCards == undefined ? [] : user.favCards;
        this.status = user?.status == undefined ? true : user.status;
    }

    static emptyUser(): Iuser {
        return {
            id: '',
            nick: '',
            name: '',
            email: '',
            imgUri: '',
            password: '',
            description: '',
            country: '',
            favCards: [],
            status: true
        }
    }

}

