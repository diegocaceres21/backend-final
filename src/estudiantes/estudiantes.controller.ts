import { Body,Controller,Delete,Get,Param,Post, Put } from '@nestjs/common';
import { CreateEstudiante } from './dto/create-estudiante.dto';
import { EstudianteService } from './estudiantes.service';
import { UpdateEstudiante } from './dto/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
    constructor(private estudianteService:EstudianteService){

    }
    @Get('')
    findAll(){
        return this.estudianteService.findAll();
    }
    @Get(':carnet')
    findOne(@Param('carnet')carnet:number){
        return this.estudianteService.findOne(+carnet);

    }
    @Post('')
    create(@Body()createEstudiante:CreateEstudiante){
        return this.estudianteService.create(createEstudiante);
    }
    @Put(':carnet')
    update(@Param('carnet')carnet:number,@Body() updateEstudiante:UpdateEstudiante){
        return this.estudianteService.update(+carnet,updateEstudiante);     
    }
    @Delete(':carnet')
    remove(@Param('carnet')carnet:number){
        return this.estudianteService.remove(+carnet);
    }
}
