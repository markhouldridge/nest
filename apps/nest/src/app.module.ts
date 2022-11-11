import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => ({
        dbName: 'postgres',
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        port: 5455,
        type: 'postgresql',
        autoLoadEntities: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
