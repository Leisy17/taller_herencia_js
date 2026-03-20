export class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return this.titulo + ", " + this.genero + ", " + this.anio;
    }

    estado() {
        return this.disponible ? "Disponible" : "Retirada";
    }

    retirar() {
        this.disponible = false;
        return `Usuario: ${this.titulo} ha sido retirado`;
    }

}