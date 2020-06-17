import { ResolverService } from '@tsed/graphql';
import { Post } from '../type/Post';
import { Arg, Ctx, FieldResolver, Int, Query, Root } from 'type-graphql';
import { PostRepository } from '../../../repository/PostRepository';

@ResolverService(Post)
export class PostResolver {
  constructor(private postRepository: PostRepository) {}
  @Query(() => [Post])
  public async posts(): Promise<Post[]> {
    const posts = await this.postRepository.findAll();
    return posts;
  }
}
