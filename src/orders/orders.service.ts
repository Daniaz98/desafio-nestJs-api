import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { price, id_asset } = createOrderDto;

    const newOrder = await this.prisma.order.create({
      data: {
        price,
        id_asset,
      },
    });

    return newOrder;
  }

  async findAll() {
    const orders = await this.prisma.order.findMany();

    const ordersWithAssets = await Promise.all(
      orders.map(async (order) => {
        const asset = await this.prisma.asset.findUnique({
          where: { id: order.id_asset },
        });
        return {
          ...order,
          asset,
        };
      }),
    );

    return ordersWithAssets;
  }
}
