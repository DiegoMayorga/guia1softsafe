"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsuario = exports.getUsuarios = void 0;
const users_1 = __importDefault(require("../models/users"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_validator_1 = require("express-validator");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield users_1.default.findAll();
    res.json({
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json(errors);
    }
    try {
        const { body } = req;
        const { nombre, email } = req.body;
        const salt = bcrypt_1.default.genSaltSync();
        body.password = bcrypt_1.default.hashSync(body.password, salt);
        const usuario = new users_1.default(body);
        yield usuario.save();
        return res.json({
            state: 'ok',
            msg: 'usuario grabado exitosamente',
            nombre,
            email
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `hable con el admin, error:${error}`
        });
    }
});
exports.postUsuario = postUsuario;
//# sourceMappingURL=users.js.map