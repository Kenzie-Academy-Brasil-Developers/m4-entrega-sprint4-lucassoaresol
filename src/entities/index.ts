import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class usuarios {
  @Column({ type: 'text' })
    name: string;
  @Column({ type: 'text' })
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
}
