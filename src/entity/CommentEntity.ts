import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PostEntity } from './PostEntity';

@Entity({ name: 'comment' })
export class CommentEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'owner_name' })
  ownerName: string;

  @Column()
  content: string;

  @ManyToOne(type => PostEntity, post => post.comments)
  @JoinColumn({ name: 'post_id'})
  post: Promise<PostEntity>;
}
