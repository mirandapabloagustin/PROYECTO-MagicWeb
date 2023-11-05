import { Iuser } from "./Interfaces";

export class User implements Iuser {
    id: number | null;
    nickName: string | null;
    email: string | null;
    password: string | null;

    constructor(user ?: Iuser) {
        this.id = user?.id == undefined ? null : user.id;
        this.nickName = user?.nickName == undefined ? '' : user.nickName;
        this.email = user?.email == undefined ? '' : user.email;
        this.password = user?.password == undefined ? '' : user.password;
    }
}