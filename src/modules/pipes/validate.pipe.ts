import { Injectable, ValidationPipe, ArgumentMetadata, BadRequestException, UnprocessableEntityException } from "@nestjs/common";

@Injectable()
export class ValidateInputPipe extends ValidationPipe{
    public async transform(value, metadata: ArgumentMetadata){
        try{
            return await super.transform(value, metadata);
        } catch (e) {
            if ( e instanceof BadRequestException){
                throw new UnprocessableEntityException(this.handleError(e.message));
            }
        }
    }

    private handleError(errors) {
        return errors.map( x => x.contraints);
    }
}