import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getHello(): string {
    return 'Hello dogs!';
  }
}
