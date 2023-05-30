import{Column,Entity,PrimaryGeneratedColumn,OneToMany}from 'typeorm';
import { Nota } from 'src/notas/entities/nota.entity';
import { Inscripcion } from 'src/inscripciones/entities/inscripcion.entity';
@Entity()
export class Estudiante{
    @PrimaryGeneratedColumn()
    carnet:number;
    @Column()
    nombre_completo:string;
    @Column()
    celular:number;
    @Column()
    fecha_nacimiento:Date;
    @OneToMany(()=>Nota,(nota)=>nota.estudiante)
    nota:Nota[]
    @OneToMany(()=>Inscripcion,(inscripcion)=>inscripcion.estudiante)
    inscripcion:Inscripcion[]
}