import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, Corredor } from '../servicios/api'; //
import { map } from 'rxjs';

@Component({
  selector: 'app-lista-corredores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-corredores.html',
})
export class ListaCorredores implements OnInit {
  api = inject(Api); 
  
  cargando = signal(false);
  corredores = signal<Corredor[]>([]);

  ngOnInit(): void {
    this.cargando.set(true);
    
    // Petición token
    this.api.getCorredores(localStorage.getItem('token') || '')
      .pipe(
        map((res) => {
          console.log(res); 
          return res;
        })
      )
      .subscribe((res) => {
        console.log(res); 
        this.corredores.set(res); // Guardamos los datos en el signal
        this.cargando.set(false);
      });
  }
}