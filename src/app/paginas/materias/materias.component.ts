import { Component } from '@angular/core';
import { Materia } from 'src/app/interfaces/materia';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent {
  materias : Materia[] = [];

  
}
