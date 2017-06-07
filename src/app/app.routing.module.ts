import { Routes } from '@angular/router/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'practice', component: PracticeComponent }
  /*
  { path: '**', component: PageNotFoundComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
