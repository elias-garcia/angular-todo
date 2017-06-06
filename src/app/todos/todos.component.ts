import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from './todos.service';
import { Todo } from './../shared/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.todosService.getTodos$().subscribe(todos => {
        switch (params.filter) {
          case 'active':
            this.todos = todos.filter(todo => todo.completed === false);
            break;
          case 'completed':
            this.todos = todos.filter(todo => todo.completed === true);
            break;
          default:
            this.todos = todos;
            break;
        }
      });
    });
  }

}
