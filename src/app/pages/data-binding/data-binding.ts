import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html'
})
export class Databinding {
  titulo: string = "Data binding: Interpolación"; 
  imagenLogo: string = "assets/img/logo1.png";
  contador: number = 0;
  valorInput: number = 0;

  sumar() {
    this.contador++;
  }
}