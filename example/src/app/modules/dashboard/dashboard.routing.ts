import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent },
];

export const declarationComponents = [
    HomeComponent,
    ErrorComponent,
    LoginComponent
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
