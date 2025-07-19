import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  bookId: string;

  @Column()
  bookName: string;

  @Column()
  author: string;
}
