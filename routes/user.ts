import { Router } from "express";
import {check} from 'express-validator';

import {
  //deleteUsuario,
  //getUsuario,
  getUsuarios,
  postUsuario,
  //updatedUsuario
} from "../controllers/users";

const router = Router();

router.get('/',     getUsuarios);
//router.get('/:id',  getUsuario);

router.post('/',[
  check('nombre', 'el nombre debe ser obligatorio').notEmpty(),
  check('password', 'el password debe ser obligatorio').notEmpty(),
  check('email', 'el email debe ser obligatorio').notEmpty(),
],postUsuario);

//router.put('/:id',[],updatedUsuario);

//router.delete('/:id',  deleteUsuario);



export default router;