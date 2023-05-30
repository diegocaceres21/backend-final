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
    @Column({type:'date'})
    fecha_nacimiento:string;
    @OneToMany(()=>Nota,(nota)=>nota.estudiante)
    nota:Nota[]
    @OneToMany(()=>Inscripcion,(inscripcion)=>inscripcion.estudiante)
    inscripcion:Inscripcion[]
}