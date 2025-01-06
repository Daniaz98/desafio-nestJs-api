import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { AssetsModule } from './assets/assets.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [OrdersModule, AssetsModule, PrismaService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
