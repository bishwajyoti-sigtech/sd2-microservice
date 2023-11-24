import { Injectable } from '@nestjs/common';
import { Person } from '@database';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const person = Person.build({ name: 'bob' });
    person.save();
    return { message: 'Hello API' };
  }
}
