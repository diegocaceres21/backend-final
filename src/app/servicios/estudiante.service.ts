import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  url = 'assets/estudiantes.json'
  obtenerDatos(){
    return this.http.get<Estudiante[]>(this.url);
  }

  enviarDatos(){

  }
}
