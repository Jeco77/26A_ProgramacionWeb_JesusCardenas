import { Producto } from "../domain/Producto";
import { ProductoRepository } from "../infrastructure/ProductoRepository";

export class ProductoService {
    constructor(private repo: ProductoRepository) {}

    async listar(): Promise<Producto[]> {
        return this.repo.listar();
    }

    async crear(producto: Producto): Promise<Producto> {
        return this.repo.crear(producto);
    }
}
