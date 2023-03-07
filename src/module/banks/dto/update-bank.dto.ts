import { PartialType } from '@nestjs/mapped-types';
import { CreateBankDto } from './create-bank.dto';
import { IsString } from 'class-validator';
import { IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';

export class UpdateBankDto extends PartialType(CreateBankDto) {
    @Length(1, 64)
    @IsString()
    @IsNotEmpty()
    readonly title: string;
  
    @IsString()
    @IsNotEmpty()
    readonly price: string;
  
    @IsNumber()
    @IsOptional()
    readonly user: number;
}
