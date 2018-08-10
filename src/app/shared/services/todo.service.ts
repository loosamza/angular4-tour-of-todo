import { Injectable } from '@angular/core';
import { Todo } from '../../model/todo';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { TODOLIST } from '../../mock/todolist-mock';
import { of } from '../../../../node_modules/rxjs/observable/of';
import { AngularFireDatabase, FirebaseListObservable } from '../../../../node_modules/angularfire2/database';

@Injectable()
export class TodoService {


  todos$: Observable<any[]>;
  todos: FirebaseListObservable<Todo[]> = null;
  constructor(private db: AngularFireDatabase) { }

  getTodoList(): FirebaseListObservable<Todo[]> {
    this.todos = this.db.list('todoList');
    console.log(this.todos);
    return this.todos;

   

  }

}
