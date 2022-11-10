import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

describe('DogsController', () => {
  let dogsController: DogsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [DogsService],
    }).compile();

    dogsController = app.get<DogsController>(DogsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dogsController.getHello()).toBe('Hello World!');
    });
  });
});
