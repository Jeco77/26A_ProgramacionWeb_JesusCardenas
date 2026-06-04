import express from "express";
import { UsuarioRepository } from "./UsuarioRepository";
import { UsuarioService } from "../application/UsuarioService";
import { usuarioController } from "./UsuarioController";

const repo = new UsuarioRepository();
const service = new UsuarioService(repo);
const app = express();

app.use(express.json());
app.use(usuarioController(service));

app.listen(3000, () => console.log("Backend Usuarios en puerto 3000"));
