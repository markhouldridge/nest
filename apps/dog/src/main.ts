import { NestFactory } from '@nestjs/core';
import { DogModule } from './dog.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(DogModule);
  await app.listen(4000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
