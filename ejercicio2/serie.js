import { Contenido } from "./contenido.js";

export class Serie extends Contenido {

    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return this.titulo + ", " + this.genero + ", " + this.anio + ", " + this.temporadas + " temporadas, " + this.totalEpisodios() + " episodios";
    }
}