import { Component } from '@angular/core';
import { Inscrito } from 'src/app/interfaces/inscrito';
import { InscribirService } from 'src/app/servicios/inscribir.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inscritos',
  templateUrl: './inscritos.component.html',
  styleUrls: ['./inscritos.component.scss']
})

export class InscritosComponent {

  inscritos : Inscrito[] = [];
  sigla: string | null ='';
  nombreMateria: string = ''; // Variable para almacenar el nombre de la materia
  nombreCOMPLETO: string = ''; // Variable para juntar el nombre con la sigla
  constructor(private inscritosService: InscribirService,private route: ActivatedRoute){

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => 
    {
      this.sigla = params.get('sigla');
      this.nombreMateria = params.get('nombre') ?? ''; // Asigna una cadena vacía si params.get('nombre') es null
      // You can now use the personId in your component
      this.nombreCOMPLETO = this.sigla + " - " + this.nombreMateria ; // Asigna el nombre de la materia aquí o realiza una lógica para obtenerlo
      console.log(this.nombreCOMPLETO);
    });

    this.inscritosService.obtenerDatos().subscribe(
      (data) => this.inscritos = data,
      error => console.log(error),
      () => console.log("FIN")
    )
  }
}