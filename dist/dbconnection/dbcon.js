"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbcon = new sequelize_1.Sequelize('guia1', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});
exports.default = dbcon;
//# sourceMappingURL=dbcon.js.map