import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly db;
    constructor(db: Repository<Product>);
    findAll(): Promise<Product[]>;
    findUnique(id: number): Promise<Product>;
    create(data: any): Promise<Product>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
