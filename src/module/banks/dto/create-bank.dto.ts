import { IsString } from 'class-validator';
import { IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';

export class CreateBankDto {
  @Length(1, 64)
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly price: string;

  @IsNumber()
  @IsNotEmpty()
  readonly user: number;
}
