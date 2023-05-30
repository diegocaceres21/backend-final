import { Body,Controller,Delete,Get,Param,Post, Put } from '@nestjs/common';
import { CreateMateria } from './dto/create-materia.dto';
import { MateriaService } from './materias.service';
import { UpdateMateria } from './dto/update-materia.dto';

@Controller('materias')
export class MateriasController {
    constructor(private materiaService:MateriaService){}
    @Get('')
    findAll(){
        return this.materiaService.findAll();
    }
    @Get(':id')
    findOne(@Param('id')id:number){
        return this.materiaService.findOne(id);

    }
    @Post('')
    create(@Body()createMateria:CreateMateria){
        return this.materiaService.create(createMateria);
    }
    @Put(':sigla')
    update(@Param('sigla')sigla:string,@Body() updateMateria:UpdateMateria){
        return this.materiaService.update(sigla,updateMateria);     
    }
    @Delete(':sigla')
    remove(@Param('sigla')sigla:string){
        return this.materiaService.remove(sigla);
    }
}
