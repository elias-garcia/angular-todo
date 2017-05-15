import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Todo } from './../shared/models/todo.model';

@Injectable()
export class TodosService {

  private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor() { }

  createTodo(description: string) {
    const toDo = new Todo(description);
  }

  getAllTodos$(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  getActiveTodos$() {

  }

  getCompleteTodos$() {

  }

  updateTodo(id: number): void {

  }

  deleteTodo(id: number): void {

  }

}
