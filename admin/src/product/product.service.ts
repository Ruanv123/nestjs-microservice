import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly db: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.db.find();
  }

  async findUnique(id: number): Promise<Product> {
    return this.db.findOneBy({ id });
  }

  async create(data): Promise<Product> {
    return this.db.save(data);
  }

  async update(id: number, data): Promise<any> {
    return this.db.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return this.db.delete(id);
  }
}
