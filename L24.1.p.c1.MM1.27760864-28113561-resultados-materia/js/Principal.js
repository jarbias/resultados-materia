//Sea la información de varios estudiantes: cédula y nota final. 
//Se sabe que los estudiantes aprueban con 48Ptos. 
//Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de aprobados, cantidad de reprobados y nota promedio de la sección. 
//Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
//777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 
//222 (60Ptos),
import  Estudiantes  from "./Estudiantes.js";
import salon from "./salon.js";
 
let estudiante1 = new Estudiantes(888, 60);
let estudiante2 = new Estudiantes(777, 50);
let estudiante3 = new Estudiantes(999, 40);
let estudiante4 = new Estudiantes(333, 80);
let estudiante5 = new Estudiantes(111, 30);
let estudiante6 = new Estudiantes(666, 90);
let estudiante7 = new Estudiantes(444, 48);
let estudiante8 = new Estudiantes(222, 60);
let salon1 = new salon();
salon1.procesarestudiantes(estudiante1);
salon1.procesarestudiantes(estudiante2);
salon1.procesarestudiantes(estudiante3);
salon1.procesarestudiantes(estudiante4);
salon1.procesarestudiantes(estudiante5);
salon1.procesarestudiantes(estudiante6);
salon1.procesarestudiantes(estudiante7);    
salon1.procesarestudiantes(estudiante8);
let salida = document.getElementById("resultado");

salida.innerHTML += "cantidad de aprobados: " + salon1.devolveraprobados() + "<br>";
salida.innerHTML += "cantidad de reprobados: " + salon1.devolverreprobados() + "<br>";
salida.innerHTML += "nota promedio: " + salon1.promedio() + "<br>";