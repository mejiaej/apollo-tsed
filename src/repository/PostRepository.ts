import { Repository, EntityRepository } from 'typeorm';
import { PostEntity } from '../entity/PostEntity';


// Create query builder to query the entire entity and join tables
// only one time. This will avoid non necesary calls to the database when
// handling lazy relations
@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  findAll(): Promise<PostEntity[]> {
    const posts = this.createQueryBuilder('post')
      .leftJoinAndSelect('post.comments', 'comment')
      .getMany();

    return posts;
  }
}
