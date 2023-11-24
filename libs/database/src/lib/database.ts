import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [__dirname + '/models/**/*.model.ts'],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
    );
  },
});
