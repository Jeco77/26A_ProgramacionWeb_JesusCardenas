import { Pedido } from "../domain/Pedido";

export class PedidoRepository {
    private pedidos: Pedido[] = [];

    async listar(): Promise<Pedido[]> {
        return this.pedidos;
    }

    async crear(pedido: Pedido): Promise<Pedido> {
        this.pedidos.push(pedido);
        return pedido;
    }
}
