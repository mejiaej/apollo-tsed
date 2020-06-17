import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Comment } from './Comment';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  public ownerName: string;

  @Field()
  public content: string;

  @Field(type => [Comment])
  comments: Comment[];
}
