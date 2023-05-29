import { Component } from '@angular/core';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {
  estudiantes : Estudiante[] = []
  displayedColumns: string[] = ['carnet', 'nombre', 'celular', 'fecha', 'edit','delete','notas'];

  constructor(private estudianteService: EstudianteService){

  }
  ngOnInit(): void {
    console.log(new Date())
    this.estudianteService.obtenerDatos().subscribe(
      (data) => this.estudiantes = data,
      error => console.log(error),
      () => console.log("FIN")
    )
  }
}
