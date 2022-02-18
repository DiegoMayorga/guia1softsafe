import { Sequelize } from 'sequelize'

const dbcon = new Sequelize('guia1', 'root', 'admin', {
  host:'localhost',
  dialect:'mysql',
  //logging: false
});

export default dbcon;