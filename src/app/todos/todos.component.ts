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

  private todos: Todo[];

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      switch (params.filter) {
        case 'active':
          break;
        case 'completed':
          break;
        default:
      }
    });
  }

}
