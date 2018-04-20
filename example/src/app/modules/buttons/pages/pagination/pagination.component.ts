import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';
import { Pagination } from 'ng-tools-ui';

@Component({
    templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {

    codes = [
        `// 导入分页模块在需要使用这个按钮组件的特性模块
import { PaginationModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., PaginationModule ],
    ...
})
export class MyModule { }`,
        `<ts-pagination
    [pagination]="pagination"
    [items]="[{text:'显示 5 条',value:5},{text:'显示 10 条',value:10},{text:'显示 20 条',value:20}]"
    outline
    color="dark"
    goTitle="跳转"
    prevTitle="上一页"
    nextTitle="下一页"
    startTitle="首页"
    endTitle="末尾">
</ts-pagination>`,
        `import { Component } from '@angular/core';
import { Pagination } from 'ng-tools-ui';

@Component({
    templateUrl: './example.html',
})
export class ExampleComponent {

    pagination = new Pagination(100);

    pageChanged() {
       console.log(this.pagination);
    }

}`
    ];

    pagination = new Pagination(100);

    constructor(public global: GlobalService) { }

    ngOnInit() {

    }
}
