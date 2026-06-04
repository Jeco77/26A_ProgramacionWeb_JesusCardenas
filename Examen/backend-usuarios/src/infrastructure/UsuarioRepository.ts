import { Usuario } from "../domain/Usuario";

export class UsuarioRepository {
    private usuarios: Usuario[] = [];

    async listar(): Promise<Usuario[]> {
        return this.usuarios;
    }

    async crear(usuario: Usuario): Promise<Usuario> {
        this.usuarios.push(usuario);
        return usuario;
    }
}
