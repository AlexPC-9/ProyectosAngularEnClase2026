import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule], // Necesario para el input del hijo
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  // @Input() permite recibir datos del padre
  @Input() mensajeDelPadre: string = '';

  // @Output() permite enviar eventos al padre
  @Output() eventoDelHijo = new EventEmitter<string>();

  mensaje: string = '';

  enviarMensajeDelHijo() {
    // Emitimos el valor actual de 'mensaje' al componente padre
    this.eventoDelHijo.emit(this.mensaje);
  }
}