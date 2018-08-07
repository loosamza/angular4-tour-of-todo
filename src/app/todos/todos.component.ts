import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: any;

  constructor(private toService: TodoService) { }

  ngOnInit() {
    console.log("I'm Do.")
    this.getTodoList();
  }

  getTodoList(): void {
    this.toService.getTodoList().subscribe(todoList => this.todoList = todoList)
  }

}
