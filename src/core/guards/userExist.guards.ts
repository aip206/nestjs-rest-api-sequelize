import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { UsersService } from "src/modules/users/users.service";
import { Observable } from "rxjs";

@Injectable()
export class UserExistGuard implements CanActivate {
    constructor(private readonly userService: UsersService) {}
    
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean>{
        const request = context.switchToHttp().getRequest();
        return this.validRequest(request);
    }

    async validRequest(request) {
        const userExist = this.userService.getByEmail(request.body.email);
        if (userExist){
            throw new ForbiddenException('Email already Exist');
        }
        return true;
    }
}