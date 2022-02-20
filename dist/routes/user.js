"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsuarios);
//router.get('/:id',  getUsuario);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'el nombre debe ser obligatorio').notEmpty(),
    (0, express_validator_1.check)('password', 'el password debe ser obligatorio').notEmpty(),
    (0, express_validator_1.check)('email', 'el email debe ser obligatorio').notEmpty(),
], users_1.postUsuario);
//router.put('/:id',[],updatedUsuario);
//router.delete('/:id',  deleteUsuario);
exports.default = router;
//# sourceMappingURL=user.js.map