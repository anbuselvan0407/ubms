import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany
} from 'typeorm';
import { User } from '../../user/entities/user.entity'; // Use relative import

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.permissions)
  users: User[];
}
