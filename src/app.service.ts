import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getObject(): any {
    let posts = {
      id: 1,
      titulo: "teste"
    }
    return posts
  }
}
