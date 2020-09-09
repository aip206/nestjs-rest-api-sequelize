import { IsNotEmpty, MaxLength, MinLength, IsNumber } from "class-validator";

export class ProductDTO {
    @IsNotEmpty()
    @MinLength(3)
    readonly name: string;
    @IsNotEmpty()
    @IsNumber()
    readonly harga: number;
    @IsNotEmpty()
    @IsNumber()
    readonly diskon: number;
    @IsNotEmpty()
    @MaxLength(1500)
    readonly detail: string;
    @IsNotEmpty()
    @IsNumber()
    readonly stok: number;
    @IsNotEmpty()
    @IsNumber()
    readonly berat: number;
    @IsNotEmpty()
    readonly kategori: string;
    readonly url: string[];

}