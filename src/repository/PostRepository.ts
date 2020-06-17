import { Repository, EntityRepository } from 'typeorm';
import { Post } from './../entity/Post';


// Create query builder to query the entire entity and join tables
// only one time. This will avoid non necesary calls to the database when
// handling lazy relations
@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  findAll(): Promise<Post[]> {
    const posts = this.createQueryBuilder('post')
      .leftJoinAndSelect('post.comments', 'comment')
      .getMany();

    return posts;
  }
}
