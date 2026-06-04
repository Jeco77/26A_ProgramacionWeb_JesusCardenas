import { Producto } from "../domain/Producto";

export class ProductoRepository {
    private productos: Producto[] = [];

    async listar(): Promise<Producto[]> {
        return this.productos;
    }

    async crear(producto: Producto): Promise<Producto> {
        this.productos.push(producto);
        return producto;
    }
}
