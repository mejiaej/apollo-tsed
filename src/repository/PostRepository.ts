import { Repository, EntityRepository } from 'typeorm';
import { PostEntity } from '../entity/PostEntity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  findAll(): Promise<PostEntity[]> {
    const posts = this.createQueryBuilder('post')
      .leftJoinAndSelect('post.comments', 'comment')
      .getMany();

    return posts;
  }
}
