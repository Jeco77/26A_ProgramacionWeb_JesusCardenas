
import { PedidoService } from "../application/PedidoService";
import { Router, Request, Response } from "express";

export function pedidoController(service: PedidoService) {
    const router = Router();

    router.get("/pedidos", async (_: Request, res: Response) => {
        res.json(await service.listar());
    });

    router.post("/pedidos", async (req: Request, res: Response) => {
        try {
            const pedido = await service.crear(req.body);
            res.json(pedido);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    });

    return router;
}
