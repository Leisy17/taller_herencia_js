import { Empleado } from "./empleado.js";

export class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, "Líder de equipo", salario);
        this.equipo = equipo;
    }

    presentarEquipo() {
        return `Mi equipo está compuesto por mi persona ${this.nombre} y mis compañeros: ${this.equipo.join(', ')}`
    }

    agregarMiembro(nombre) {
        this.equipo.push(nombre);
        return `${nombre} ha sido añadido al equipo`;
    }

    info() {
        return {
        nombre: this.nombre,
        cargo: this.cargo,
        salarioAnual: this.calcularSalarioAnual(),
        estado: this.activo ? "Cuenta activa" : "Inactivo",
        cantidadEquipo: this.equipo.length
        }
    }
}

const lider1 = new Lider("María", 5000, ["Ana", "Luis"]);
const lider2 = new Lider("Pedro", 4500, ["Carlos"]);

// Método heredado
console.log(lider1.calcularSalarioAnual());
console.log(lider2.calcularSalarioAnual());

// Método heredado
console.log(lider2.desactivar());

// Verificamos con info()
console.log(lider2.info());