import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { FoodModule } from 'apps/food/src/food.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Dog } from './dog.entity';

@Module({
  imports: [
    FoodModule,
    MikroOrmModule.forRoot({
      dbName: 'postgres',
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5455,
      type: 'postgresql',
      autoLoadEntities: true,
    }),
    MikroOrmModule.forFeature({ entities: [Dog] }), //This app's entities
  ],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
