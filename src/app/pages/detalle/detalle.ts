// src/app/pages/detalle/detalle.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlumnoService, Alumno } from '../comunicacion/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {
  private route = inject(ActivatedRoute);
  private alumnoService = inject(AlumnoService);

  // Usamos el signo ? para indicar que puede ser opcional
  alumno?: Alumno;

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    // Forzamos que la lista se trate como un array de Alumno para que reconozca el .id
    const lista = this.alumnoService.getAlumnos() as Alumno[];
    this.alumno = lista.find(a => a.id === id);
  }
}