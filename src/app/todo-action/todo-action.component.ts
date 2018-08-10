import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-todo-action',
  templateUrl: './todo-action.component.html',
  styleUrls: ['./todo-action.component.css']
})
export class TodoActionComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private _router: Router) { }

  ngOnInit() {

    console.log('TodoActionComponent Active ...');
  }

  addTodo(data: NgForm) {
    if(data.value.name && data.value.desc){
      this.db.list('/todoList').push(data.value);
      this._router.navigate(['/todos']);
    }
    

  }

}
