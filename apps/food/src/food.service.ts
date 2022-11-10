import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodService {
  getHello(): string {
    return 'Hello food!';
  }

  getFood(type?: string) {
    switch (type) {
      case 'dog': {
        return 'Dog enjoys beef';
      }
      case 'cat': {
        return 'Cat enjoys tuna';
      }
      default:
        return 'No type was given';
    }
  }
}
