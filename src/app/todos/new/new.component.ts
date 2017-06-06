import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodosService } from './../todos.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public description: string;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  public onSubmit(todoForm: FormGroup) {
    this.todosService.createTodo(this.description);
    todoForm.reset();
  }

}
