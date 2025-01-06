import { IsString } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  id: string;

  @IsString()
  symbol: string;
}
