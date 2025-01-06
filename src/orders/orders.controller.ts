import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const createOrder = await this.ordersService.createOrder(createOrderDto);
    return { message: 'Ordem criado com sucesso', data: createOrder };
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
}
