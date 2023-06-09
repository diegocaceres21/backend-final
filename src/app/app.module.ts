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
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';
import {HttpClientModule} from '@angular/common/http';
import { NotasComponent } from './paginas/notas/notas.component';
import { InscribirComponent } from './paginas/inscribir/inscribir.component';
import { ConfirmarComponent } from './modals/confirmar/confirmar.component';
import { NewMateriaComponent } from './modals/new-materia/new-materia.component'
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NewEstudianteComponent } from './modals/new-estudiante/new-estudiante.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { InscritosComponent } from './paginas/inscritos/inscritos.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    EstudiantesComponent,
    NotasComponent,
    InscribirComponent,
    ConfirmarComponent,
    NewMateriaComponent,
    NewEstudianteComponent,
    InscritosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,MatDialogModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
