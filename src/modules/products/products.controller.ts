import { Controller, Post, UseGuards, Body, Get, Request, Param, Delete, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductsService } from './products.service';
import { ProductDTO } from './dto/product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() body: ProductDTO, @Request() req): Promise<Product> {
        return await this.productService.create(body, req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async page() {
        return await this.productService.findAll();
    }


    @UseGuards(AuthGuard('jwt'))
    @Get(":id")
    async findById(@Param('id') id: number) {
        const get = await this.productService.getOne(id);
        if(!get){
            throw new NotFoundException('This Product doesn\'t exist'); 
        }
        return get;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(":id")
    async delete(@Param('id') id: number, @Request() req) {
        const deleted = await this.productService.delete(id, req.user.id);

        if (deleted === 0) {
            throw new NotFoundException('This Product doesn\'t exist');
        }

        // return success message
        return  {"statusCode":200, "message":"Successfully deleted"};
    }

}
