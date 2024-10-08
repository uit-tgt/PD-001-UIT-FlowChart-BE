import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { User } from '../../entities/user.entity';
import { Group } from '../../entities/group.entity';
import { Lesson } from '../../entities/lesson.entity';
import { LessonType } from '../../entities/lesson_type.entity';
import { Topic } from '../../entities/topic.entity';
import { Repo } from '../../entities/repo.entity';
import { Role } from '../../entities/role.entity';
import { Parameter } from '../../entities/parameter.entity';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { GroupsModule } from '../groups/groups.module';
import { LessonGroupsModule } from '../lesson_groups/lesson_groups.module';
import { LessonTypesModule } from '../lesson_types/lesson_types.module';
import { LessonsModule } from '../lessons/lessons.module';
import { ReposModule } from '../repos/repos.module';
import { RolesModule } from '../roles/roles.module';
import { TopicsModule } from '../topics/topics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([
      User,
      Group,
      Lesson,
      LessonType,
      Topic,
      Repo,
      Role,
      Parameter,
    ]),
    UsersModule,
    AuthModule,
    GroupsModule,
    LessonTypesModule,
    LessonsModule,
    ReposModule,
    RolesModule,
    TopicsModule,
    TopicsModule,
    RolesModule,
    ReposModule,
    LessonsModule,
    LessonTypesModule,
    GroupsModule,
    LessonGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
