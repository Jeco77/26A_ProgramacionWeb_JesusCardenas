import { UsuarioService } from "../application/UsuarioService";
import { Router, Request, Response } from "express";

export function usuarioController(service: UsuarioService) {
    const router = Router();

    router.get("/usuarios", async (_: Request, res: Response) => {
        res.json(await service.listar());
    });

    router.post("/usuarios", async (req: Request, res: Response) => {
        try {
            const usuario = await service.crear(req.body);
            res.json(usuario);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    });

    return router;
}
