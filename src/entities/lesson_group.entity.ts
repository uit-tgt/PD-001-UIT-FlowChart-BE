import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lesson } from './lesson.entity';
import { Topic } from './topic.entity';

@Entity()
export class LessonGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToOne(() => Topic, (topic) => topic.lessonGroups)
  @JoinColumn()
  topic: Topic;

  @OneToMany(() => Lesson, (lesson) => lesson.lessonGroup)
  lessons: Lesson[];
}
