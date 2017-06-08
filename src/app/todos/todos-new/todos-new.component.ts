import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodosService } from './../todos.service';

@Component({
  selector: 'app-todos-new',
  templateUrl: './todos-new.component.html',
  styleUrls: ['./todos-new.component.css']
})
export class TodosNewComponent implements OnInit {

  public description: string;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  public onSubmit(todoForm: FormGroup) {
    this.todosService.createTodo(this.description);
    todoForm.reset();
  }

}
