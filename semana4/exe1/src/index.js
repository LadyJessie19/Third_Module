import { initializeDatabase, disconnectDatabase } from "./database/config.js";
import { ProductRepository } from "./app/repositories/productRepository.js";
import { Product } from "./app/entities/Product.js";

async function createProduct() {
    try {
    await initializeDatabase();
      const product = new ProductRepository(Product);
      await product.create({ name: "Sabonete e cotonete", price: 18, description: 'Lorem Ipsum', amount: 1000 });
      console.log("Produto criado com sucesso!");
      disconnectDatabase();
    } catch (error) {
      console.error("Ocorreu um erro ao criar o produto:");
      console.error(error)
      disconnectDatabase();
    }
  }
  
  createProduct();