import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Corredor {
  id: number;
  dorsal: string;
  corredor: string; // El campo real de la BBDD
  categoria: string;
}

export interface LoginResponse {
  access: string;
  status: number;
}

@Injectable({ providedIn: 'root' })
export class Api {

  private carrito: Corredor[] = [];
  private _carrito = new BehaviorSubject<Corredor[]>([]);
  private http = inject(HttpClient);

  //SIGNAL
  userSelected = signal('');
  private url = 'https://dam.colegiolitterator.es/php/bbdd.php';

  // OBSERVABLE DEFINIDO
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url,
      { usuario: email, clave: password, accion: 'validar' },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
  // OBSERVABLE DEFINIDO
  getCorredores(token: string): Observable<Corredor[]> {
    return this.http.get<Corredor[]>(this.url, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    });
  }
}