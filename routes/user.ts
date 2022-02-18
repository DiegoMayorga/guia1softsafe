import { Router } from "express";
import {check} from 'express-validator';

import {
  //deleteUsuario,
  //getUsuario,
  getUsuarios,
  //postUsuario,
  //updatedUsuario
} from "../controllers/users";

const router = Router();

router.get('/',     getUsuarios);
//router.get('/:id',  getUsuario);

//router.post('/',[
//], postUsuario);

//router.put('/:id',[
//],updatedUsuario);

//router.delete('/:id',  deleteUsuario);



export default router;