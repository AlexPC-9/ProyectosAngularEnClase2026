import { Injectable, signal } from '@angular/core';

export interface Alumno {
  id: number;
  nombre: string;
  email: string;
  foto: string;
  progreso: number;
}

@Injectable({ providedIn: 'root' })

export class AlumnoService {
  private alumnos = [
    { id: 1, nombre: 'Wassim Aarab', email: 'wassim.aarab@colegiolitterator.com', progreso: 25 },
    { id: 2, nombre: 'Andrea Bárcenas Fernández', email: 'andrea.barcenas.fernandez@colegiolitterator.com', progreso: 0 },
    { id: 3, nombre: 'Juan Cambronero Fresco', email: 'juan.cambronero.fresco@colegiolitterator.com', progreso: 25 },
    { id: 4, nombre: 'Carlos Comendador Sánchez', email: 'carlos.comendador.sanchez@colegiolitterator.com', progreso: 0 },
    { id: 5, nombre: 'Gabriel de Haro Huerta', email: 'gabriel.haro.huerta@colegiolitterator.com', progreso: 0 },
    { id: 6, nombre: 'Raúl de Justo Leyenda', email: 'raul.justo.leyenda@colegiolitterator.com', progreso: 25 }
  ];

  // 2. Signal para guardar los datos del formulario
  private resultadoFormulario = signal<any>(null);

  constructor() { }

  // Métodos para la tabla
  getAlumnos() {
    return this.alumnos;
  }

  // Métodos para el formulario
  setResultado(datos: any) {
    this.resultadoFormulario.set(datos);
  }

  getResultado() {
    return this.resultadoFormulario();
  }
}