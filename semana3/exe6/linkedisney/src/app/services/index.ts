/* This layer takes care from the data logic. All the gathering, formating, turning the data into an object. */

import { ProfileRep } from "../repositories";
import { facProfile } from "./factories";

export class ProfileSer {
  repository: ProfileRep;
  constructor(repository: ProfileRep) {
    this.repository = repository;
  }
  async createSer(body: any) {
    const { fullname, title, bio, currentOccupation, education, certifications, status } = body;
    if (!(fullname && title && bio && currentOccupation && education && certifications && status)) {
      return { error: true, message: "Bad Request" };
    }
    const newPost = facProfile(fullname, title, bio, currentOccupation, education, certifications, status);
    const repositoryRes = await this.repository.createRep(newPost);
    return repositoryRes;
  }
  async findAllSer() {
    return this.repository.findAllRep();
  }
}
