/* This layer takes care from the data logic. All the gathering, formating, turning the data into an object. */

import { facPostMaker, IPost } from "./factory";
import { PostRep } from "../repositories";

export class PostSer {
  repository: PostRep;
  constructor(repository: PostRep) {
    this.repository = repository;
  }
  async create(body: IPost) {
    const { author, content } = body
    if (!(author || content)) {
      return { error: true, message: "The author or content aren't valid." };
    }

    const newPost = facPostMaker(author, content);
    const repositoryRes = await this.repository.create(newPost);
    return repositoryRes;
  }
  async like(id: string) {
    const isPostValid = await this.repository.findById(id);
    if (!isPostValid) {
      return { error: true, message: "This post was not found" };
    }
    await this.repository.like(id);
    return {};
  }
  async findOne(id:string){
    const post = await this.repository.findById(id);
    if (!post) {
      return {
        error: true,
        message: "This post has not published anything yet",
      };
    }
    return post;
  }
  async findByAuthor(author: string) {
    const posts = await this.repository.findByAuthor(author);
    if (!posts) {
      return {
        error: true,
        message: "This author has not published anything yet",
      };
    }
    return posts;
  }
  async findAll() {
    return this.repository.findAll();
  }
  async delete(id: string) {
    return this.repository.delete(id);
  }
}
