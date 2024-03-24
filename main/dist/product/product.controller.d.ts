import { ProductService } from './product.service';
import { HttpService } from '@nestjs/axios';
export declare class ProductController {
    private readonly productService;
    private httpService;
    constructor(productService: ProductService, httpService: HttpService);
    all(): Promise<import("./product.model").Product[]>;
    like(id: number): Promise<any>;
    productCreated(product: any): Promise<void>;
    productUpdated(product: any): Promise<void>;
    productDeleted(id: number): Promise<void>;
}
