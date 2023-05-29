import { Module } from '@nestjs/common';
import { InscripcionesController } from './inscripciones.controller';
import { InscripcionService } from './inscripciones.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Inscripcion } from './entities/inscripcion.entity';

@Module({
  controllers: [InscripcionesController],
  providers:[InscripcionService],
  imports:[TypeOrmModule.forFeature([Inscripcion])]
})
export class InscripcionesModule {}
