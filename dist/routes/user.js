"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsuarios);
//router.get('/:id',  getUsuario);
//router.post('/',[
//], postUsuario);
//router.put('/:id',[
//],updatedUsuario);
//router.delete('/:id',  deleteUsuario);
exports.default = router;
//# sourceMappingURL=user.js.map