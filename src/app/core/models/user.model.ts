import { Iuser } from "../interfaces/user.interface";

export class User implements Iuser {
    nick: string | null;
    name: string | null;
    email: string | null;
    imgUri: string | null;
    password: string | null;
    description: string | null;
    country: string | null;

    constructor(user?: Iuser) {
        this.nick = user?.nick == undefined ? '' : user.nick;
        this.name = user?.name == undefined ? '' : user.name;
        this.email = user?.email == undefined ? '' : user.email;
        this.imgUri = user?.imgUri == undefined ? '' : user.imgUri;
        this.password = user?.password == undefined ? '' : user.password;
        this.description = user?.description == undefined ? '' : user.description;
        this.country = user?.country == undefined ? '' : user.country;
    }
}