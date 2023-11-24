import { Optional } from 'sequelize';
import { Table, Model } from 'sequelize-typescript';

interface PersonAttributes {
  id: number;
  name: string;
}

interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table
export class Person extends Model<PersonAttributes, PersonCreationAttributes> {}
