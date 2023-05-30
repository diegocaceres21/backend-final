import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { EstudianteService } from './estudiantes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  controllers: [EstudiantesController],
  providers:[EstudianteService],
  imports:[TypeOrmModule.forFeature([Estudiante])],
  exports:[EstudianteService]
})
export class EstudiantesModule {}
