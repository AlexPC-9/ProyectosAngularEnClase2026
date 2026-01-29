import { Component, inject } from '@angular/core';
import { AlumnoService } from '../comunicacion/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-resultado.html'
})
export class FormResultado {
  store = inject(AlumnoService);

  // Obtenemos el valor de la Signal
  datos = this.store.getResultado();
}