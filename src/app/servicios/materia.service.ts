import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../interfaces/materia';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  url = 'assets/materias.json'
  obtenerDatos(){
    return this.http.get<Materia[]>(this.url);
  }

  enviarDatos(){

  }
}
