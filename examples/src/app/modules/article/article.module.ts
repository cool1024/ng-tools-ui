import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ButtonModule,
    ModalModule,
    CkeditorModule,
    DatePickerModule,
    PaginationModule,
} from 'ng-tools-ui';


/*路由模块*/
import { ArticleRoutingModule, declarationComponents, entryComponents } from './article.routing';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ModalModule,
        DatePickerModule,
        PaginationModule,
        // CollapseModule,
        // TabModule,
        // PrismModule,
        // PaginationModule,
        CkeditorModule,
        ArticleRoutingModule,
    ],
    declarations: [
        declarationComponents
    ],
    entryComponents: [
        entryComponents
    ]

})
export class ArticleModule { }
