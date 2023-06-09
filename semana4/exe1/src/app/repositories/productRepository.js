export class ProductRepository {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      return await this.model.create(data)
    }
  
    async findAll() {
      return await this.model.find()
    }
  
    async findById(id) {
      return await this.model.findById(id)
    }
  
    async update(id, data) {
      return await this.model.findByIdAndUpdate(id, data)
    }
  
    async delete(id) {
      return await this.model.findByIdAndDelete(id)
    }
  }