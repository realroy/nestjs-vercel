import { Module } from '@nestjs/common';

import { TodoListControllerV1 } from './v1/todo-list.controller.js';
import { TodoListControllerV2 } from './v2/todo-list.controller.js';

@Module({
  controllers: [TodoListControllerV1, TodoListControllerV2],
})
export class TodoListModule {}
