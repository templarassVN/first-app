import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CalenderComponent } from './pages/calender-page/calender/calender.component';
import { TodoDrawerComponent } from './components/todo-drawer/todo-drawer.component';
import { FormsModule } from '@angular/forms';
import { CalenderDateComponent } from './components/calender-date/calender-date.component';
import { NotFoundComponent } from './pages/not-found-page/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/app.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerMinMaxExampleComponent } from './components/datepicker-min-max-example/datepicker-min-max-example.component';



@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        CalenderComponent,
        TodoDrawerComponent,
        CalenderDateComponent,
        NotFoundComponent,
        LoginComponent,
        LoginPageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        DatepickerMinMaxExampleComponent
    ]
})
export class AppModule {

}
