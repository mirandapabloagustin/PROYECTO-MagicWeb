import { RoleUser } from "@enums/access.user.enum";

export interface Iuser {
    id: string | null;
    nick: string | null;
    role :  RoleUser | undefined;
    name: string | null;
    email: string | null;
    imgUri: string | null;
    password: string | null;
    description: string | null;
    country: string | null;
    favCards: any[] | null;
    status: boolean | undefined;
  }
  