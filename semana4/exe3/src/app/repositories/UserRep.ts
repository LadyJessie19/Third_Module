export class UserRep {
  model: any;
  constructor(model: any) {
    this.model = model;
  }

  async createRep(body: any) {
    return this.model.create(body);
  }

  async findAllRep() {
    return this.model.find().populate("posts");
  }

  async findByEmailRep(email:any) {
    return this.model.findOne({ email });
  }
// TODO: Question -> this function
  async associatePostRep(userId:any, postId:any) {
    return this.model.findByIdAndUpdate(
      userId,
      { $push: { posts: postId } },
      { new: true }
    );
  }
}
