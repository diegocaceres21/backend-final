import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriasModule } from './materias/materias.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { NotasModule } from './notas/notas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

@Module({
  imports: [TypeOrmModule.forRoot({type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'nicolores',
  database: 'proyfinaltecweb',
  synchronize: true,
  autoLoadEntities:true
}),EstudiantesModule,MateriasModule,NotasModule,InscripcionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
