import { ResolverService } from '@tsed/graphql';
import { Arg, Int, Query, Mutation } from 'type-graphql';
import { Comment } from '../type/Comment';
import { CommentRepository } from '../../../repository/CommentResolver';
import { AddCommentInput } from '../type/AddCommentInput';

@ResolverService(Comment)
export class CommentResolver {
  constructor(
    private commentRepository: CommentRepository,
  ) {}

  @Query(() => [Comment])
  public async comments(
    @Arg('postId', () => Int) postId: number
  ): Promise<Comment[]> {
    const comments = await this.commentRepository.findCommentsByPostId(postId);
    return comments;
  }

  @Mutation(() => Comment)
  async addComment(
    @Arg('newComment') newComment: AddCommentInput
  ): Promise<Comment> {
    const { ownerName, content, postId } = newComment;
    const savedComment = await this.commentRepository.save({
      ownerName,
      content,
      postId,
    });
    return savedComment;
  }
}
