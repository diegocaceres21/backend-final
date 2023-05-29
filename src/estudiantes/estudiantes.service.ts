import { Injectable } from '@nestjs/common';
import { CreateEstudiante } from './dto/create-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository}from 'typeorm';
import { UpdateEstudiante } from './dto/update-estudiante.dto';
@Injectable()
export class EstudianteService{
    constructor(@InjectRepository(Estudiante)private EstudianteRepository:Repository<Estudiante>){}
    create(createEstudiante:CreateEstudiante){
          return this.EstudianteRepository.save(createEstudiante);
    }
    findAll(){
          return  this.EstudianteRepository.find();
    }
    findOne(carnet:number){
        return this.EstudianteRepository.findOneBy({carnet:carnet});
    }
    update(carnet:number,updateEstudiante:UpdateEstudiante){
        return this.EstudianteRepository.update({carnet:carnet}, {
          //  carnet:updateEstudiante.carnet,
            nombre_completo:updateEstudiante.nombre_completo,
            celular:updateEstudiante.celular,
            fecha_nacimiento:updateEstudiante.fecha_nacimiento
        });
    }
    remove(carnet:number){
        return this.EstudianteRepository.delete(carnet);
    }
}