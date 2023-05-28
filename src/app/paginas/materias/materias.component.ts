import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/interfaces/materia';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit{
  materias : Materia[] = [];
  constructor(private materiaService: MateriaService){

  }
  ngOnInit(): void {
    this.materiaService.obtenerDatos().subscribe(
      (data) => this.materias = data,
      error => console.log(error),
      () => console.log("FIN")
    )
  }
}
