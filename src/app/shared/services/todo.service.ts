import { Injectable } from '@angular/core';
import { Todo } from '../../model/todo';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { TODOLIST } from '../../mock/todolist-mock';
import { of } from '../../../../node_modules/rxjs/observable/of';

@Injectable()
export class TodoService {

  todos: Todo[];

  constructor() { }

  getTodoList(): Observable<Todo[]> {

    return of(TODOLIST);

  }

}
