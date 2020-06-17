import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { CommentEntity } from './CommentEntity';

@Entity({ name: "post"})
export class PostEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'owner_name' })
  ownerName: string;

  @Column()
  content: string;

  @OneToMany(type => CommentEntity, comment => comment.post)
  comments: Promise<CommentEntity[]>;
}
