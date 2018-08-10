import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionComponent } from './todo-action.component';

describe('TodoActionComponent', () => {
  let component: TodoActionComponent;
  let fixture: ComponentFixture<TodoActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
