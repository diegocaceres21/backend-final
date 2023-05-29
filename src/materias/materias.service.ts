import { Injectable } from '@nestjs/common';
import { CreateMateria } from './dto/create-materia.dto';
import { Materia } from './entities/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository}from 'typeorm';
import { UpdateMateria } from './dto/update-materia.dto';
@Injectable()
export class MateriaService{
    constructor(@InjectRepository(Materia)private MateriaRepository:Repository<Materia>){}
    create(createMateria:CreateMateria){
          return this.MateriaRepository.save(createMateria);
    }
    findAll(){
          return  this.MateriaRepository.find();
    }
    findOne(sigla:string){
        return this.MateriaRepository.findOneBy({sigla:sigla});
    }
    update(sigla:string,updateMateria:UpdateMateria){
        return this.MateriaRepository.update({sigla:sigla}, {
            sigla:updateMateria.sigla,
            nombre:updateMateria.nombre,
            creditos:updateMateria.creditos,
            departamento:updateMateria.departamento
        });
    }
    remove(sigla:string){
        return this.MateriaRepository.delete(sigla);
    }
}