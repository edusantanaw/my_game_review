import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export default class UserPersistenceEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ nullable: false, type: 'text' })
  name: string;
  @Column({ unique: true, nullable: false, type: 'text' })
  email: string;
  @Column({ nullable: false, type: 'text' })
  password: string;
  @Column({ nullable: false, type: 'text' })
  roles: string;
  @Column({ type: 'int', default: 0 })
  deleted: number;
  @Column({ type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true, type: 'text' })
  search?: string;
  constructor() {
    this.search = `${this.name},${this.email}`;
  }
}
