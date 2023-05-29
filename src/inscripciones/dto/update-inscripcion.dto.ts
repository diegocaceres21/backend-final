import{PartialType}from '@nestjs/mapped-types';
import { CreateInscripcion } from './create-inscripcion.dto';
export class UpdateInscripcion extends PartialType(CreateInscripcion){}