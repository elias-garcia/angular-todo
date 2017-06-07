import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosModule } from './todos/todos.module';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { PracticeModule } from './practice/practice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    PracticeModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
