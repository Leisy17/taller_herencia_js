import { Pelicula } from "./pelicula.js";
import { Serie } from "./serie.js";
/* Checkpoint */
// Crear películas
const pelicula1 = new Pelicula("Inception", "Ciencia ficción", 2010, 148);
const pelicula2 = new Pelicula("Titanic", "Romance", 1997, 195);

// Crear series
const serieUno = new Serie("Breaking Bad", "Drama", 2008, 5);
serieUno.registrarEpisodios(13);

const serieDos = new Serie("Stranger Things", "Ciencia ficción", 2016, 4);
serieDos.registrarEpisodios(9);

// Ver fichas
console.log(pelicula1.ficha());
console.log(pelicula2.ficha());
console.log(serieUno.ficha());
console.log(serieDos.ficha());

// Ver estado inicial
console.log(pelicula1.estado()); // Disponible

// Retirar contenido
pelicula1.retirar();

// Ver estado después
console.log(pelicula1.estado()); // Retirada

/* Escenario */

// 1️⃣ Crear películas
const peli1 = new Pelicula("Inception", "Ciencia ficción", 2010, 148);
const peli2 = new Pelicula("Titanic", "Romance", 1997, 195);
const peli3 = new Pelicula("Interstellar", "Ciencia ficción", 2014, 169);

// Crear series
const serie1 = new Serie("Breaking Bad", "Drama", 2008, 5);
serie1.registrarEpisodios(13);

const serie2 = new Serie("Stranger Things", "Ciencia ficción", 2016, 4);
serie2.registrarEpisodios(9);

const serie3 = new Serie("The Office", "Comedia", 2005, 9);
serie3.registrarEpisodios(22);

// Guardar en catálogo
const catalogo = [peli1, peli2, peli3, serie1, serie2, serie3];

// Recorrer e imprimir ficha
for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}

// Retirar dos contenidos
peli1.retirar();
serie2.retirar();

console.log(peli1.estado());   // Retirada
console.log(serie2.estado());  // Retirada

// Contar disponibles
let disponibles = 0;

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible) {
        disponibles++;
    }
}

console.log("Disponibles:", disponibles);