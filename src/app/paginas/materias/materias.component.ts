import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Materia } from 'src/app/interfaces/materia';
import { NewMateriaComponent } from 'src/app/modals/new-materia/new-materia.component';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html', 
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit{
  materias : Materia[] = [];
  constructor(private materiaService: MateriaService,private router: Router,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.materiaService.obtenerDatos().subscribe(
      (data) => this.materias = data,
      error => console.log(error),
      () => console.log("FIN")
    )
  }

  navigate(id:number) {
    this.router.navigate(['/notas', id]);
  }

  openDialog(){
    const dialogRef = this.dialog.open(NewMateriaComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.data != undefined){
        console.log(result.data) 
        this.materias.push(result.data)
      }
    });
  }
  navigatetoinscritos(sigla:string, nombre:string) 
  {
    this.router.navigate(['/inscritos', sigla, nombre]);
  }
}
