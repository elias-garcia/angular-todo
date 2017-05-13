import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { TodosComponent } from 'app/todos/todos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewComponent, ListComponent, TodosComponent],
  exports: []
})
export class TodosModule { }
