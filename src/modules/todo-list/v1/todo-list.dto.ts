import { ApiProperty } from '@nestjs/swagger';

import { TodoDto } from '../todo-list.dto.js';

export class GetManyTodoResponseV1 {
  @ApiProperty({
    description: 'List of todo',
    type: TodoDto,
    isArray: true,
  })
  data: TodoDto[];
}
