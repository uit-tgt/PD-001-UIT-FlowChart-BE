import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  url: string;

  @Column({ length: 45 })
  description: string;

  @ManyToMany(() => Group, (group) => group.roles, {
    createForeignKeyConstraints: false,
  })
  groups: Group[];
}
