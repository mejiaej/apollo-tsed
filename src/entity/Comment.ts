import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from './Post';

@Entity({ name: 'comment' })
export class Comment {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'owner_name' })
  ownerName: string;

  @Column()
  content: string;

  @ManyToOne(type => Post, post => post.comments)
  @JoinColumn({ name: 'post_id'})
  post: Promise<Post>;
}
