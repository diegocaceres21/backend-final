import { Component } from '@angular/core';
import { EstudianteService } from 'src/app/servicios/estudiante.service';
import { Estudiante } from 'src/app/interfaces/estudiante';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ConfirmarComponent } from 'src/app/modals/confirmar/confirmar.component';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {
  estudiantes : Estudiante[] = []
  displayedColumns: string[] = ['carnet', 'nombre', 'celular', 'fecha', 'edit','delete','notas'];

  constructor(private estudianteService: EstudianteService, public dialog: MatDialog){

  }
  openDialog(estudiante:Estudiante): void {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.borrarEstudiante(estudiante)
      }
    });
   
  }
  ngOnInit(): void {
    console.log(new Date())
    this.estudianteService.obtenerDatos().subscribe(
      (data) => this.estudiantes = data,
      error => console.log(error),
      () => console.log("FIN")
    )
  }

  crearEstudiante(estudiante:Estudiante){
    this.estudianteService
    .crear(estudiante)
    .subscribe(data => this.estudiantes.push(data));
  }

  borrarEstudiante(estudiante:Estudiante){
    this.estudianteService
    .borrar(estudiante.id)
    .subscribe();
  }
}
