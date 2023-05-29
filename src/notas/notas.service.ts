import { Injectable } from '@nestjs/common';
import { CreateNota } from './dto/create-nota.dto';
import { Nota } from './entities/nota.entity';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository}from 'typeorm';
import { UpdateNota } from './dto/update-nota.dto';
@Injectable()
export class NotaService{
    constructor(@InjectRepository(Nota)private NotaRepository:Repository<Nota>){}
    create(createNota:CreateNota){
          return this.NotaRepository.save(createNota);
    }
    findAll(){
          return  this.NotaRepository.find();
    }
    findOne(id:number){
        return this.NotaRepository.findOneBy({id:id});
    }
    update(id:number,updateNota:UpdateNota){
        return this.NotaRepository.update({id:id}, {
            
            carnet:updateNota.carnet,
            sigla:updateNota.sigla,
            gestion:updateNota.gestion,
            evaluacion:updateNota.evaluacion,
            calificacion:updateNota.calificacion
        });
    }
    remove(id:number){
        return this.NotaRepository.delete(id);
    }
}