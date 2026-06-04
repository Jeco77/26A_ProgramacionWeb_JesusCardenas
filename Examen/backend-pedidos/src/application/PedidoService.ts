import { Pedido } from "../domain/Pedido";
import { PedidoRepository } from "../infrastructure/PedidoRepository";

export class PedidoService {
    constructor(private repo: PedidoRepository) {}

    async listar(): Promise<Pedido[]> {
        return this.repo.listar();
    }

    async crear(pedido: Pedido): Promise<Pedido> {
        return this.repo.crear(pedido);
    }
}
