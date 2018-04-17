import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleEditComponent } from './pages//article-edit/article-edit.component';
import { PreviewModalComponent } from './pages//article-edit/preview-modal.component';
import { ArticleTableComponent } from './pages//article-table/article-table.component';

const routes: Routes = [
    { path: 'edit', component: ArticleEditComponent },
    { path: 'table', component: ArticleTableComponent },
];

export const declarationComponents = [
    ArticleEditComponent,
    PreviewModalComponent,
    ArticleTableComponent,
];

export const entryComponents = [
    PreviewModalComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ArticleRoutingModule { }
