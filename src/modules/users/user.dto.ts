import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

enum Role {
    ADMIN = 'admin',
    BUYER = 'buyer',
    SELLER = 'seller'
}

export class UserDTO {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(
        Gender, {message: 'Gender must be either male or female'}
    )
    readonly gender: Gender;

    
    @IsNotEmpty()
    @IsEnum(
        Role, {message: 'Role must be either admin/buyer/seller'}
    )
    readonly role: Role;
}

