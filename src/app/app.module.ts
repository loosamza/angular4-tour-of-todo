import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TodoService } from './shared/services/todo.service';
import { SearchPipe } from './shared/pipe/search.pipe';
import { TodoActionComponent } from './todo-action/todo-action.component';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule }  from 'angularfire2/database';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SearchPipe,
    TodoActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
