import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hijo } from './hijo/hijo';
import { AlumnoService } from './store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comunicacion',
  standalone: true,
  imports: [CommonModule, FormsModule, Hijo, RouterLink],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css',
})
export class Comunicacion {
  mensajeDelPadre: string = '';
  mensajeDelHijo: string = '';

  // Inyectamos el servicio
  private alumnoService = inject(AlumnoService);

  // Obtenemos la lista de alumnos usando el método que creaste en el store
  alumnos = this.alumnoService.getAlumnos();

  recibirMensajeDelHijo(event: string) {
    this.mensajeDelHijo = event;
  }
}