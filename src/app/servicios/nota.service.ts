import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from '../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private http: HttpClient) { }

  url = 'assets/notas.json'
  obtenerDatos(){
    return this.http.get<Nota[]>(this.url);
  }

  enviarDatos(){

  }
}
