import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from './PostEntity';

@Entity({ name: 'comment' })
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'owner_name' })
  ownerName: string;

  @Column()
  content: string;

  @Column({ name: 'post_id', nullable: true })
  postId: number;

  @ManyToOne(type => PostEntity, post => post.comments)
  @JoinColumn({ name: 'post_id'})
  post: PostEntity;
}
