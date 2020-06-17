import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Comment } from './Comment';

@Entity({ name: "post"})
export class Post {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'owner_name' })
  ownerName: string;

  @Column()
  content: string;

  @OneToMany(type => Comment, comment => comment.post)
  comments: Promise<Comment[]>;
}
