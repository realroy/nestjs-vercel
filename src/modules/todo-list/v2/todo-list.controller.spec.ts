import { Test, TestingModule } from '@nestjs/testing';
import { TodoListControllerV2 } from './todo-list.controller';

describe('TodoListController', () => {
  let controller: TodoListControllerV2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListControllerV2],
    }).compile();

    controller = module.get<TodoListControllerV2>(TodoListControllerV2);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
