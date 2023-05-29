import { Component } from '@angular/core';
import { InscribirService } from 'src/app/servicios/inscribir.service';

@Component({
  selector: 'app-inscribir',
  templateUrl: './inscribir.component.html',
  styleUrls: ['./inscribir.component.scss']
})

export class InscribirComponent {
  constructor(private inscribirService: InscribirService){
    
  }
}