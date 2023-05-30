import { Injectable } from '@nestjs/common';
import { CreateInscripcion } from './dto/create-inscripcion.dto';
import { Inscripcion } from './entities/inscripcion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository}from 'typeorm';
import { UpdateEstudiante } from 'src/estudiantes/dto/update-estudiante.dto';
import { UpdateInscripcion } from './dto/update-inscripcion.dto';
@Injectable()
export class InscripcionService{
    constructor(@InjectRepository(Inscripcion)private InscripcionRepository:Repository<Inscripcion>){}
    create(createInscripcion:CreateInscripcion){
          return this.InscripcionRepository.save(createInscripcion);
    }
    findAll(){
          return  this.InscripcionRepository.find({
            relations:['nota']
          });
    }
    findOne(id:number){
        return this.InscripcionRepository.findOneBy({id:id});
    }
    update(id:number,updateInscripcion:UpdateInscripcion){
        return this.InscripcionRepository.update({id:id}, {
            carnet:updateInscripcion.carnet,
            sigla:updateInscripcion.sigla,
           
            fecha_inscripcion:updateInscripcion.fecha_inscripcion
        });
    }
    remove(id:number){
        return this.InscripcionRepository.delete(id);
    }
}