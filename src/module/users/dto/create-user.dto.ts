// import { isString } from "class-validator"

// export class CreateUserDto {
//     readonly name: string
//     readonly age: number
//     readonly banks: number
// }


import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, IsOptional, Length } from "class-validator";

export class CreateUserDto {
    @Length(1, 64)
    @IsString()
    @IsNotEmpty()
    readonly name: string

    @IsNumber()
    @IsNotEmpty()
    readonly age: number

    @IsNumber()
    @IsNotEmpty()
    readonly banks: number
}
