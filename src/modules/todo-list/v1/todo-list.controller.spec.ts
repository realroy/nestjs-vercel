import { Test, TestingModule } from '@nestjs/testing';
import { TodoListControllerV1 } from './todo-list.controller';

describe('TodoListController', () => {
  let controller: TodoListControllerV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListControllerV1],
    }).compile();

    controller = module.get<TodoListControllerV1>(TodoListControllerV1);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
