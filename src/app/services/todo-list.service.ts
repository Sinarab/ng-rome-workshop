import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addTodo(title: string) {
    this.todoList.push({ title: title });
  }

  removeTodo(titleToRemove: string) {
    this.todoList.map((todo, i) => {
      if (todo.title === titleToRemove) {
        this.todoList.splice(i, 1);
      }
    })
  }
}
