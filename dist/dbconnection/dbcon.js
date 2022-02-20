"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//const dbcon = new Sequelize('guia1', 'root', 'admin', {
const dbcon = new sequelize_1.Sequelize('guia1', 'root', 'Mypoopsql.co!', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});
exports.default = dbcon;
//# sourceMappingURL=dbcon.js.map