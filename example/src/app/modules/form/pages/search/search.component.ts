import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'ng-tools-ui';
import { RequestService, GlobalService } from '../../../../cores/services';
import { ApiData } from '../../../../cores/classes';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    codes = [
        `import { SearchModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., SearchModule ],
    ...
})
export class MyModule { }`,
        `<div tsSearch [search]="doSearch" placeholder="请选择用户" searchLabel="请输入要查询的用户昵称" [(ngModel)]="value"></div>`,
        `import { Component } from '@angular/core';

        @Component({
            templateUrl: './example.html',
        })
        export class ExampleComponent {

            // 默认值
            value: Item[] = [
                {
                    value: 20,
                    text: 'Carleton Carter'
                }
            ];

            /**
     * 从服务器查询需要的选项
     * @param key 查询关键词
     */
    doSearch = (key: string): Observable<Item[]> => {
        return this.request.get('/store/user/search', { limit: 100, offset: 0, nick: key })
            .pipe(map<ApiData, Item[]>(res => {
                const items: any[] = res.datas.rows;
                return items.map<Item>(item => {
                    return {
                        value: item.id,
                        text: item.nick,
                        content: \`<img height = "40" class= "rounded-circle" src = "\${item.avatar}">\${item.nick}\`,
                    };
                });
            }));
    }
}`
    ];

    value: Item[] = [
        {
            value: 20,
            text: 'Carleton Carter'
        }
    ];

    constructor(
        private request: RequestService,
        public global: GlobalService,
    ) { }

    ngOnInit() { }

    /**
     * 从服务器查询需要的选项
     * @param key 查询关键词
     */
    doSearch = (key: string): Observable<Item[]> => {
        return this.request.get('/store/user/search', { limit: 100, offset: 0, nick: key })
            .pipe(map<ApiData, Item[]>(res => {
                const items: any[] = res.datas.rows;
                return items.map<Item>(item => {
                    return {
                        value: item.id,
                        text: item.nick,
                        content: `<img height="40" class="rounded-circle" src="${item.avatar}"> ${item.nick}`,
                    };
                });
            }));
    }

}
