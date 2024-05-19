import { Routes } from "@angular/router";
import { CalenderComponent } from "../pages/calender-page/calender/calender.component";
import { NotFoundComponent } from "../pages/not-found-page/not-found/not-found.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";

export const routes: Routes = [
    { path: '', redirectTo: "/login", pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent, title: "Đăng nhập" },
    { path: 'calender', component: CalenderComponent, title: "Lịch" },
    { path: 'contact', redirectTo: '/lien-he', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];