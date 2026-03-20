import { Contenido } from "./contenido.js";

export class Pelicula extends Contenido {

    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60);
        let minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }

    ficha() {
        return this.titulo + ", " + this.genero + ", " + this.anio + ", " + this.duracionFormateada();
    }
}