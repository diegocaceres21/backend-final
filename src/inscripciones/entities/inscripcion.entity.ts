import{Column,Entity,PrimaryGeneratedColumn,ManyToOne}from 'typeorm';
import { Materia } from 'src/materias/entities/materia.entity';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';

@Entity()
export class Inscripcion{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    carnet:number;
    @Column()
    sigla:string;
   
    @Column()
    fecha_inscripcion:string;
    @ManyToOne(()=>Materia,(materia)=>materia.sigla)
    materia:Materia;
    @ManyToOne(()=>Estudiante,(estudiante)=>estudiante.carnet)
    estudiante:Estudiante;
}