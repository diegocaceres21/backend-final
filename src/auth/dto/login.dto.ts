import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginUsuarioDto{
    
    @IsNotEmpty({message: 'el nombre de usuario no puede estar vacio'})
    @MaxLength(10, {message: 'nombre de usuario: longitud maxima de 10'})
    nombreUsuario: string;
    
    @IsNotEmpty({message: 'la contrasenia del usuario no puede estar vacia'})
    password: string;
}       