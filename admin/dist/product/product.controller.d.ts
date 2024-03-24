import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    findAll(): Promise<import("./product.entity").Product[]>;
    create(title: any, image: any): Promise<import("./product.entity").Product>;
    findOne(id: number): Promise<import("./product.entity").Product>;
    update(id: number, title: any, image: any): Promise<import("./product.entity").Product>;
    delete(id: number): Promise<void>;
    like(id: number): Promise<any>;
}
