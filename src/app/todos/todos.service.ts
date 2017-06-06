import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Todo } from './../shared/models/todo.model';

@Injectable()
export class TodosService {

  private todos: Todo[] = [];
  private todos$: BehaviorSubject<Todo[]>;

  constructor() {
    this.todos$ = new BehaviorSubject(this.todos);
   }

  createTodo(description: string) {
    this.todos.push(new Todo(description));
    this.todos$.next(this.todos);
  }

  getTodos$(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  updateTodo(newTodo: Todo): void {
    this.todos.map(oldTodo => {
      if (oldTodo.id === newTodo.id) {
        oldTodo.description = newTodo.description;
        oldTodo.completed = oldTodo.completed;
      }
    });
    this.todos$.next(this.todos);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todos$.next(this.todos);
  }

}
