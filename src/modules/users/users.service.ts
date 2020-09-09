import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}

    async create(userDto: UserDTO): Promise<User> {
        return await this.userRepository.create<User>(userDto);
    }

    async getByEmail(email:string) : Promise<User> {
        try {
            const response = await this.userRepository.findOne<User>({where: {email}});
            return response
        }catch {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
    }

    async getById(id:number): Promise<User> {
        try {
            const response = await this.userRepository.findOne<User>({where:{id}});
            return response
        }catch {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
    }
}
