import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  id_asset: string;
}
