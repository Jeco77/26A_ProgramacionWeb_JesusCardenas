import { Usuario } from "../domain/Usuario";
import { UsuarioRepository } from "../infrastructure/UsuarioRepository";

export class UsuarioService {
    constructor(private repo: UsuarioRepository) {}

    async listar(): Promise<Usuario[]> {
        return this.repo.listar();
    }

    async crear(usuario: Usuario): Promise<Usuario> {
        return this.repo.crear(usuario);
    }
}
