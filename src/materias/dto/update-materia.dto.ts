import{PartialType}from '@nestjs/mapped-types';
import { CreateMateria } from './create-materia.dto';
export class UpdateMateria extends PartialType(CreateMateria){
    sigla:string;
    nombre: string;
    creditos: number;
    departamento: string;
}