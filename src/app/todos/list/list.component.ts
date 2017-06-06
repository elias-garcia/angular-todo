import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../../shared/models/todo.model';
import { TodosService } from './..//todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() public todos: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() { }

  onChangeStatus(todo: Todo) {
    todo.completed = !todo.completed;
    this.todosService.updateTodo(todo);
  }

  onEdit(todo: Todo, newDescription: string) {
    todo.description = newDescription;
    this.todosService.updateTodo(todo);
    todo.editing = false;
  }

  onDelete(id: number) {
    this.todosService.deleteTodo(id);
  }

}
