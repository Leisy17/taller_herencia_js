import { Empleado } from "./empleado.js";
import { Lider } from "./lider.js";

// Empleados
const emp1 = new Empleado("Ana", "Dev", 3000);
const emp2 = new Empleado("Luis", "QA", 2500);
const emp3 = new Empleado("Carlos", "Soporte", 2000);
const emp4 = new Empleado("Laura", "UX", 2800);

// Líderes
const lider1 = new Lider("María", 5000, ["Ana", "Luis"]);
const lider2 = new Lider("Pedro", 4500, ["Carlos", "Laura"]);

// 2. Costo total mensual de nómina
const nominaMensual =
    emp1.salario +
    emp2.salario +
    emp3.salario +
    emp4.salario +
    lider1.salario +
    lider2.salario;

console.log("Nómina mensual:", nominaMensual);

// 3. Costo anual
const nominaAnual = nominaMensual * 12;
console.log("Nómina anual:", nominaAnual);

// 4. Desactivar un empleado
emp3.desactivar();
console.log(emp3.info());

// 5. Info y equipo de líderes
console.log(lider1.info());
console.log(lider1.presentarEquipo());

console.log(lider2.info());
console.log(lider2.presentarEquipo());