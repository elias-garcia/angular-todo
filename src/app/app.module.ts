import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosModule } from './todos/todos.module';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
