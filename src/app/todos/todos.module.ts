import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { TodosService } from './todos.service';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [NewComponent, ListComponent, TodosComponent, FiltersComponent],
  providers: [TodosService],
  exports: []
})
export class TodosModule { }
