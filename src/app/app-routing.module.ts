import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './paginas/materias/materias.component';
import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';

const routes: Routes = [{ path: 'materias', component: MateriasComponent }, 
          {path: 'estudiantes', component: EstudiantesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
