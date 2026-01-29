import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivas.html'
})
export class Directivas {
  // Variable para el ejercicio @if
  mostrar: boolean = false;

  // Variable para el ejercicio de @switch
  colorElegido: string = 'Rojo';

  // Función para mostrar/ocultar el mensaje
  toggle() {
    this.mostrar = !this.mostrar;
  }
  usuarios = [
    { nombre: 'Hans Burger', rol: '10x Developer', precio: 863.45, status: 'Aprobado', fecha: '06/10/2020' },
    { nombre: 'Sofia Ramirez', rol: 'UI Designer', precio: 540, status: 'Pendiente', fecha: '07/15/2020' },
    { nombre: 'Liam Wong', rol: 'Project Manager', precio: 1200.99, status: 'Aprobado', fecha: '08/01/2020' },
    { nombre: 'Emma Johnson', rol: 'QA Engineer', precio: 320.5, status: 'Pendiente', fecha: '08/20/2020' },
    { nombre: 'Carlos Vega', rol: 'Backend Developer', precio: 980.75, status: 'Aprobado', fecha: '09/05/2020' }
  ];
}