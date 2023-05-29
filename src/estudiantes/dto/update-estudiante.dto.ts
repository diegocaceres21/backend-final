import{PartialType}from '@nestjs/mapped-types';
import { CreateEstudiante } from './create-estudiante.dto';
export class UpdateEstudiante extends PartialType(CreateEstudiante){}