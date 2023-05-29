import{PartialType}from '@nestjs/mapped-types';
import { CreateNota } from './create-nota.dto';
export class UpdateNota extends PartialType(CreateNota){}