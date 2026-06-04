import { ProductoService } from "../application/ProductoService";
import { Router, Request, Response } from "express";

export function productoController(service: ProductoService) {
    const router = Router();

    router.get("/productos", async (_: Request, res: Response) => {
        res.json(await service.listar());
    });

    router.post("/productos", async (req: Request, res: Response) => {
        try {
            const producto = await service.crear(req.body);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    });

    return router;
}
