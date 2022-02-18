import { Response, Request } from "express";
import Usuario from "../models/users";
import bcrypt from 'bcrypt';

export const getUsuarios = async (req:Request, res:Response) => {
  const usuarios = await Usuario.findAll();
  res.json({
    usuarios
  })
}