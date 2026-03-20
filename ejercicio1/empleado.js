export class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }

    presentarse() {
        return "Hola " + this.nombre + " mi cargo: " + this.cargo;
    }

    calcularSalarioAnual() {
        return this.salario * 12;
    }

    desactivar() {
        this.activo = false;
        return `Usuario: ${this.nombre} ha sido desactivado`;
    }

    info() {
        return {
            nombre: this.nombre,
            cargo: this.cargo,
            salarioAnual: this.calcularSalarioAnual(),
            estado: this.activo ? "Cuenta activa" : "Inactivo"
        };
    }
}

const emp1 = new Empleado("Ana", "Desarrolladora", 3000);
const emp2 = new Empleado("Luis", "Diseñador", 2500);
const emp3 = new Empleado("Carlos", "Manager", 4000);

// Llamar métodos
console.log(emp1.presentarse());
console.log(emp1.calcularSalarioAnual());
console.log(emp1.info());

console.log(emp2.presentarse());
console.log(emp2.calcularSalarioAnual());
console.log(emp2.info());

console.log(emp3.presentarse());
console.log(emp3.calcularSalarioAnual());
console.log(emp3.info());

// Desactivar uno
console.log(emp2.desactivar());

// Verificar que info() lo refleja
console.log(emp2.info());