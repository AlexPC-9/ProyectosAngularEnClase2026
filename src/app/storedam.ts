import { Injectable, signal } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storedam {
  
  usuario_selected = signal<string>('')


}
