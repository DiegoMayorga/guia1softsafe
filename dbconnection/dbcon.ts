import { Sequelize } from 'sequelize'

//const dbcon = new Sequelize('guia1', 'root', 'admin', {
const dbcon = new Sequelize('guia1', 'root', 'Mypoopsql.co!', {
  host:'localhost',
  dialect:'mysql',
  //logging: false
});

export default dbcon;