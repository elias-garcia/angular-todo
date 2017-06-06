import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { FiltersComponent } from './filters/filters.component';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule
  ],
  declarations: [NewComponent, ListComponent, TodosComponent, FiltersComponent],
  providers: [TodosService],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TodosModule { }
