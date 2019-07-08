import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreetingsComponent} from './greetings/greetings.component';
import {TestComponent} from './test.component';
import {ShellComponent} from './shell/shell.component';
const routes: Routes = [
    {
      path: '', 
      component: GreetingsComponent, 
      data: {
        title: "Greetings"
        }
    },
     {
      path: 'greetings', 
      component: GreetingsComponent, 
      data: {
        title: "Greetings"
        }
    },
  {
    path: 'hello', 
    component: HelloComponent, 
    data: {
      title: "Hello"
    }
  },
  {
        path: 'test',
        component: TestComponent,
        data: {
          title: "Test"
        }
  }


]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent , GreetingsComponent,TestComponent, ShellComponent],
  bootstrap:    [ ShellComponent ]
})
export class AppModule { }
