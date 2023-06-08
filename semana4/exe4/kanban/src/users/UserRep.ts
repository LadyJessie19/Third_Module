import { ObjectId } from "mongoose";

export class UserRep {
  model: any;
  constructor(model: any) {
    this.model = model;
  }

  async createRep(user: any) {
    return await this.model.create(user);
  }

  async findByEmailRep(email: any) {
    return this.model.findOne({ email });
  }

  async getAllRep() {
    return await this.model.find().populate("tasks");
  }

  async findByNameRep(name: string) {
    return await this.model.findOne({ name });
  }

  async deleteRep(id: ObjectId) {
    return await this.model.findByIdAndDelete(id);
  }

  async findByIdRep(id: string) {
    const result = await this.model.findById(id);
    if (result) {
      return { statusCon: "ok", result };
    }
    // return { statusCon: 'not ok' }
  }

  async associateTask(userId:any, taskId:any) {
    return this.model.findByIdAndUpdate(
      userId,
      { $push: { tasks: taskId } },
      { new: true }
    );
  }
}
