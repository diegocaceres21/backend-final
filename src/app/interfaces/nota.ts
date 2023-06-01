import { Estudiante } from "./estudiante";
import { Materia } from "./materia";

export interface Nota {
    //carnet_estudiante: string;
    //sigla_materia: string;
    evaluacion:string;
    calificacion: number;
    //fecha: Date;
    gestion: string;
    materia: Materia;
    estudiante: Estudiante;
}
