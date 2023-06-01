import{Column,Entity,PrimaryGeneratedColumn,OneToMany}from 'typeorm';
import { Nota } from 'src/notas/entities/nota.entity';
import { Inscripcion } from 'src/inscripciones/entities/inscripcion.entity';
@Entity()
export class Materia{
    @PrimaryGeneratedColumn()
    id
    @Column()
    sigla:string;
    @Column()
    nombre:string;
    @Column()
    descripcion:string;
    /*@Column()
    creditos:number;
    @Column()
    departamento:string;*/
    @OneToMany(()=>Nota,(nota)=>nota.materia)
    nota:Nota[]
    @OneToMany(()=>Inscripcion,(inscripcion)=>inscripcion.materia)
    inscripcion:Inscripcion[]
}