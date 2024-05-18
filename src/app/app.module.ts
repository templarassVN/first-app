import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CalenderComponent } from './pages/calender-page/calender/calender.component';
import { TodoDrawerComponent } from './components/todo-drawer/todo-drawer.component';
import { FormsModule } from '@angular/forms';
import { CalenderDateComponent } from './components/calender-date/calender-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CalenderComponent,
    TodoDrawerComponent,
    CalenderDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
