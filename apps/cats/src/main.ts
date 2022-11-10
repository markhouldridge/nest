import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
