class Estudiante {
  nombre;
  asignaturas = ["JavaScript", "HTML", "CSS"];
  constructor(nom) {
    this.nombre = nom;
  }
  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const newEstudiante = new Estudiante("Oscar");

console.log(newEstudiante.obtenDatos());
