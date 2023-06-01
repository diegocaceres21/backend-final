import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscrito } from '../interfaces/inscrito';

@Injectable({
  providedIn: 'root'
})
export class InscribirService {

  
  constructor(private http: HttpClient) { }
    @Injectable({
      providedIn: 'root'
    })

    url = 'assets/inscripciones.json'
    obtenerDatos(){
      return this.http.get<Inscrito[]>(this.url);
    }
  
    enviarDatos(){
  
    }
}