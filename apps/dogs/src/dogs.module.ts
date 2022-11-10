import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { FoodModule } from 'apps/food/src/food.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Dog } from './dog.entity';
@Module({
  exports: [DogsService],
  imports: [
    FoodModule,
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        dbName: 'mydb',
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        port: 5455,
        type: 'postgresql',
        //autoLoadEntities: true,
        entities: [Dog],
      }),
    }),
  ],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
