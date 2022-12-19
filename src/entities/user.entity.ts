import { getRounds, hashSync } from 'bcryptjs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

@Entity('users')
class User {
  @Column({ type: 'text' })
    name: string;
  @Column({ type: 'text', unique: true })
    email: string;
  @Column({ type: 'text' })
    password: string;
  @Column({ type: 'boolean' })
    isAdm: boolean;
  @Column({ type: 'boolean', default: true })
    isActive: boolean;
  @CreateDateColumn()
    createdAt: Date;
  @UpdateDateColumn()
    updatedAt: Date;
  @PrimaryGeneratedColumn('uuid')
    id: string;
  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
