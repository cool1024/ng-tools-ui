import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './pages/confirm/confirm.component';


const routes: Routes = [
    { path: 'simple', component: ConfirmComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MessageRoutingModule { }
