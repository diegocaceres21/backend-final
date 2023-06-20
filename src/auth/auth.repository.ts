import { UsuarioEntity } from "src/usuario/entities/usuario.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(UsuarioEntity)
export class AuthRepository extends Repository<UsuarioEntity>{

}