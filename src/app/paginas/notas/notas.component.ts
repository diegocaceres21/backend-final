import { Component } from '@angular/core';
import { Nota } from 'src/app/interfaces/nota';
import { NotaService } from 'src/app/servicios/nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent {
  notas : Nota[] = [];
  constructor(private notasService: NotaService){

  }
  ngOnInit(): void {
    this.notasService.obtenerDatos().subscribe(
      (data) => this.notas = data,
      error => console.log(error),
      () => console.log("FIN")
    )
  }
}
