import { Repository, EntityRepository } from 'typeorm';
import { CommentEntity } from '../entity/CommentEntity';

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  findCommentsByPostId(postId: number): Promise<CommentEntity[]> {
    const comments = this.createQueryBuilder('comment')
      .innerJoinAndSelect('comment.post', 'post')
      .where('post.id = :postId', { postId })
      .getMany();

    return comments;
  }
}
