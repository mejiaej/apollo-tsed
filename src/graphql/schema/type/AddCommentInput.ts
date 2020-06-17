import { InputType, Field } from 'type-graphql';
import { Comment } from './Comment';
import { Post } from './Post';

@InputType({ description: "New comment data" })
export class AddCommentInput implements Partial<Comment> {
  @Field()
  content: string;

  @Field()
  ownerName: string;

  @Field()
  postId: number;
}