import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../servicios/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './servicios.html',
})
export class Servicios {
  private api = inject(Api);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  alPulsarLogin() {
    console.log('Intentando entrar...');
    
    localStorage.setItem('token', 'fake-token');

    this.router.navigate(['/listado-corredores']);
  }
}