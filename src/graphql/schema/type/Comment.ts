import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Post } from './Post';

@ObjectType()
export class Comment {
  @Field()
  id: number;

  @Field()
  ownerName: string;

  @Field()
  content: string;

  @Field(type => Post)
  post: Post;
}
