import { Routes } from '@angular/router/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from 'app/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent }
  /*
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
