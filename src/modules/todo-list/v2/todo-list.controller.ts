import {
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import {
  GetByIdTodoParamsV2,
  GetByIdTodoResponseV2,
  GetManyTodoQueryV2,
  GetManyTodoResponseV2,
} from './todo-list.dto.js';

const todoList = [
  { id: 1, name: 'Todo #1', isDone: false },
  { id: 2, name: 'Todo #2', isDone: true },
] satisfies GetManyTodoResponseV2['data'];

@ApiTags('v2/todo-list')
@Controller({ path: 'todo-list', version: 'v2' })
export class TodoListControllerV2 {
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('TodoListControllerV2');
  }

  @ApiOkResponse({
    type: GetManyTodoResponseV2,
  })
  @Get()
  getMany(@Query() query: GetManyTodoQueryV2): GetManyTodoResponseV2 {
    this.logger.debug('test logger', query);

    return {
      data:
        typeof query.isDone !== 'undefined'
          ? todoList.filter((todo) => query.isDone === todo.isDone)
          : todoList,
    };
  }

  @ApiOkResponse({
    type: GetByIdTodoResponseV2,
  })
  @ApiNotFoundResponse()
  @Get(':id')
  getById(@Param() param: GetByIdTodoParamsV2): GetByIdTodoResponseV2 {
    const todo = todoList.find((todo) => todo.id === param.id);

    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }
}
