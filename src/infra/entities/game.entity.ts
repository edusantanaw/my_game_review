import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'game' })
export default class GamePersistenceEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column({ nullable: false, type: 'text' })
  name: string;
  @Column({ nullable: false, type: 'text' })
  publisher: string;
  @Column({ nullable: false, type: 'text' })
  categories: string;
  @Column({ nullable: false, type: 'time' })
  release: Date;
  @Column({ type: 'int', default: 0 })
  deleted: number;
  @Column({ type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column({ nullable: true, type: 'text' })
  search?: string;
  constructor() {
    this.search = `${this.name},${this.publisher},${this.release}`;
  }
}
