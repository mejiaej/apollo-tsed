import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommentEntity } from './CommentEntity';

@Entity({ name: "post"})
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'owner_name' })
  ownerName: string;

  @Column()
  content: string;

  @OneToMany(type => CommentEntity, comment => comment.post)
  comments: CommentEntity[];
}
