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

    ngOnInit() {

    }

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
