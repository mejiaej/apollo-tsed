import { Repository, EntityRepository } from 'typeorm';
import { Comment } from './../entity/Comment';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  findCommentsByPostId(postId: number): Promise<Comment[]> {
    const comments = this.createQueryBuilder('comment')
      .leftJoinAndSelect('comment.post', 'post')
      .where('post.id = :postId', { postId })
      .getMany();

    return comments;
  }
}
