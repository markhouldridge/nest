import { EntityRepository } from '@mikro-orm/postgresql';
import { Dog } from './dog.entity';

export class DogsRepository extends EntityRepository<Dog> {}
