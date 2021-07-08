import { TodoListService } from './../services/todo-list.service';
import { TodoItem } from './../interfaces/todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addTodo(title);
  }

  removeItem(titleToRemove: string) {
    this.todoListService.removeTodo(titleToRemove);
  }
}
