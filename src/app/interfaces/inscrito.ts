import { Estudiante } from "./estudiante";
import { Materia } from "./materia";

export interface Inscrito {
    id:number;
    //carnet_estudiante: string;
    //estudiante: string;
    fecha_inscripcion:string;
    materia:Materia;
    estudiante: Estudiante;
    //siglamateria: string;
    //gestion: string
}