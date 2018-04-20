import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './pages/simple/simple.component';
import { PaginationComponent } from './pages/pagination/pagination.component';

const routes: Routes = [
    { path: 'simple', component: SimpleComponent },
    { path: 'page', component: PaginationComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ButtonsRoutingModule { }
