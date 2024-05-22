import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { GetManyTodoResponseV1 } from './todo-list.dto.js';

@ApiTags('v1/todo-list')
@Controller({ path: 'todo-list', version: 'v1' })
export class TodoListControllerV1 {
  @ApiOkResponse({
    type: GetManyTodoResponseV1,
  })
  @Get()
  getMany(): GetManyTodoResponseV1 {
    return { data: [{ id: 1, name: 'Todo #1', isDone: false }] };
  }
}
