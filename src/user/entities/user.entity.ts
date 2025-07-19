import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { Permission } from '../../permission/entities/permission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  usertype: string; // 'candidate' or 'employee'

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @ManyToMany(() => Permission, (permission) => permission.users)
  @JoinTable()
  permissions: Permission[];
}
