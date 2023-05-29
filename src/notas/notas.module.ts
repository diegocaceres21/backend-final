import { Module } from '@nestjs/common';
import { NotasController } from './notas.controller';
import { NotaService } from './notas.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Nota } from './entities/nota.entity';

@Module({
  controllers: [NotasController],
  providers:[NotaService],
  imports:[TypeOrmModule.forFeature([Nota])]
})
export class NotasModule {}
