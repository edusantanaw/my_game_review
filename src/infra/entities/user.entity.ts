import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export default class UserPersistenceEntity {
  @PrimaryColumn()
  id: string;
  @Column({ nullable: false, type: 'uuid' })
  name: string;
  @Column({ unique: true, nullable: true, type: 'text' })
  email: string;
  @Column({ nullable: false, type: 'text' })
  password: string;
  @Column({ nullable: false, type: 'mediumtext' })
  roles: string;
  @Column({ type: 'int', default: 0 })
  deleted: number;
  @Column({ type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
