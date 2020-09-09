import { Controller, UseGuards, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from '../users/user.dto';
import { UserExistGuard } from 'src/core/guards/userExist.guards';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(UserExistGuard)
    @Post('signup')
    async signup(@Body() user: UserDTO) {
        return await this.authService.create(user);
    }
}
