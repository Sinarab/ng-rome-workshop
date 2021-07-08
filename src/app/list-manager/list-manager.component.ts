import { TodoItem } from './../interfaces/todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {
    this.todoList.push({ title: title });
  }

  removeItem(titleToRemove: string) {
    this.todoList.map((todo, i) => {
      if (todo.title === titleToRemove) {
        this.todoList.splice(i, 1);
      }
    })
  }
}
