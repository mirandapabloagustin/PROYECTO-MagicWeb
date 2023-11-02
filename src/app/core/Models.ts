import { Iuser } from './Interfaces';

export class User implements Iuser {
    id: number | null;
    name: string |  null;
    lastName: string | null;
    userName: string | null;
    email: string | null;
    password: string | null;

    constructor( user?: Iuser ) {
        this.id = user?.id == undefined ? null : user.id;
        this.name = user?.name == undefined ? null : user.name;
        this.lastName = user?.lastName == undefined ? null : user.lastName;
        this.userName = user?.userName == undefined ? null : user.userName;
        this.email = user?.email == undefined ? null : user.email;
        this.password = user?.password == undefined ? null : user.password;
    }
}
