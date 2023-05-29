import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriasComponent } from './paginas/materias/materias.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';
import {HttpClientModule} from '@angular/common/http';
import { NotasComponent } from './paginas/notas/notas.component';
import { InscribirComponent } from './paginas/inscribir/inscribir.component';
import { ConfirmarComponent } from './modals/confirmar/confirmar.component'
@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    EstudiantesComponent,
    NotasComponent,
    InscribirComponent,
    ConfirmarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,MatDialogModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
