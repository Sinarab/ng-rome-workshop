import { TodoItem } from './../interfaces/todo-item';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem;
  @Output() removeEvent = new EventEmitter; 
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(title: string) {
    this.removeEvent.emit(title)
  }

}
