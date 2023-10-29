import { IUsuario,ITarea } from "./Interfaces";

export class Usuario implements IUsuario{

    id: number | null;
    email: string | null;
    password: string | null;

    constructor(usuario ?: any){
        this.id = usuario?.id ? usuario.id : null;
        this.email = usuario?.email ? usuario.email : null;
        this.password = usuario?.password ? usuario.password : null;
    }
}

export class Tarea implements ITarea{

    id: number | null;
    titulo: string | null;
    descripcion: string | null;

    constructor(tarea:ITarea | null){
        this.id = tarea?.id ? tarea.id : null;
        this.titulo = tarea?.titulo ? tarea.titulo : null;
        this.descripcion = tarea?.descripcion ? tarea.descripcion : null;
    }
}