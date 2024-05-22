import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

import { TodoDto } from '../todo-list.dto.js';

export class GetManyTodoQueryV2 {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) =>
    ['true', 'false'].includes(value) ? Boolean(value) : value,
  )
  isDone?: boolean;
}

export class GetByIdTodoParamsV2 {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class GetManyTodoResponseV2 {
  @ApiProperty({
    description: 'List of todo',
    type: TodoDto,
    isArray: true,
  })
  data: TodoDto[];
}

export class GetByIdTodoResponseV2 extends TodoDto {}
