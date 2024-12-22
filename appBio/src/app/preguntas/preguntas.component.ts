import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  preguntas = [
    { id: 1, pregunta: '¿Cuál es la capital de Francia?' },
    { id: 2, pregunta: '¿Quién pintó la Mona Lisa?' },
    // Agrega más preguntas aquí
  ];
}