import { Repository, EntityRepository } from 'typeorm';
import { Post } from './../entity/Post';


// Create query builder to query the entire entity and joins
// to use only one query
@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  findAll(): Promise<Post[]> {
    const posts = this.createQueryBuilder('post')
      .innerJoinAndSelect('post.comments', 'comment')
      .getMany();

    return posts;
  }
}
