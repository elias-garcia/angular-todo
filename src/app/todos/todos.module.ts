import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodosNewComponent } from './todos-new/todos-new.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { TodosFiltersComponent } from './todos-filters/todos-filters.component';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule
  ],
  declarations: [TodosNewComponent, TodosListComponent, TodosComponent, TodosFiltersComponent],
  providers: [TodosService],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TodosModule { }
