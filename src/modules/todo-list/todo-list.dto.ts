import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isDone: boolean;
}
