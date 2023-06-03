// TODO: Question -> Why this userRepository

export class PostSer {
  repository: any;
  userRepository: any;
  constructor(repository: any, userRepository: any) {
    this.repository = repository;
    this.userRepository = userRepository;
  }

  async createSer(userId: any, body: any) {
    const post = await this.repository.createRep(body);

    return this.userRepository.associatePostRep(userId, post._id);
  }
}
