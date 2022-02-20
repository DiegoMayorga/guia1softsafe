import { Response, Request } from "express";
import Usuario from "../models/users";
import bcrypt from 'bcrypt';
import { validationResult } from "express-validator";

export const getUsuarios = async (req:Request, res:Response) => {
  const usuarios = await Usuario.findAll();
  res.json({
    usuarios
  })
}

export const postUsuario = async (req:Request, res:Response) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors)
  }
  try {
    const { body } = req;
    const { nombre, email } = req.body;
    const salt = bcrypt.genSaltSync();
    body.password = bcrypt.hashSync(body.password, salt);
    const usuario = new Usuario(body)
    await usuario.save();
    return res.json({
      state: 'ok',
      msg: 'usuario grabado exitosamente',
      nombre,
      email
    })
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: `hable con el admin, error:${error}`
    })
  }
}