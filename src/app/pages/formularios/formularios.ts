import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoService } from '../comunicacion/store';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularios',
  imports: [ReactiveFormsModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {

  store = inject(AlumnoService);
  router = inject(Router);

  practicaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido1: new FormControl('', Validators.required),
    apellido2: new FormControl('', Validators.required),
    tipoDocumento: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    listaPracticas: new FormControl('', Validators.required),
    multiselect: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pais: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
    codigoPostal: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    comentarios: new FormControl('', Validators.required),
    aceptoPolitica: new FormControl(false, Validators.required),
  });

  enviarFormulario() {
    this.store.setResultado(this.practicaForm.value);
    console.log(this.practicaForm.value);
    this.router.navigate(['/form-resultado']);
  }
}

