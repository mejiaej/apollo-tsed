import { ResolverService } from '@tsed/graphql';
import { Comment } from '../type/Comment';
import { Arg, Int, Query } from 'type-graphql';
import { CommentRepository } from '../../../repository/CommentResolver';

@ResolverService(Comment)
export class CommentResolver {
  constructor(private commentRepository: CommentRepository) {}

  @Query(() => [Comment])
  public async comments(
    @Arg('postId', () => Int) postId: number,
  ): Promise<Comment[]> {
    const comments = await this.commentRepository.findCommentsByPostId(postId);
    return comments;
  }
}
