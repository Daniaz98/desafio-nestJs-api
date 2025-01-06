import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return { message: 'Asset criado com sucesso', data: createAssetDto };
  }

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }
}
