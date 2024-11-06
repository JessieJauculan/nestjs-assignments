import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentController } from './assignment/assignment.controller';

@Module({
  imports: [],
  controllers: [AppController, AssignmentController],
  providers: [AppService],
})
export class AppModule {}
