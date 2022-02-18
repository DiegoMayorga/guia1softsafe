import { DataTypes } from 'sequelize'
import dbcon from '../dbconnection/dbcon'

const Usuario = dbcon.define('Usuario', {
  nombre: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
});

export default Usuario;