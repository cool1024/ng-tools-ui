import { Component } from '@angular/core';
import { GlobalService } from '../../../../cores/services';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent {

    codes = [
        `import { TabModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., TabModule ],
    ...
})
export class MyModule { }`,
        `<ts-tabs [tabs]="['座头鲸','树袋熊','白头海雕']" [target]="tsTabsOne" activeTab="树袋熊"></ts-tabs>
<div tsTabs #tsTabsOne='tsTabs' class="card rounded-0 border-top-0">
    <div tsTab tab='座头鲸'>第一个内容</div>
    <div tsTab tab='树袋熊'>第二个内容</div>
    <div tsTab tab='白头海雕'>第三个内容</div>
</div>`
    ];

    constructor(
        public global: GlobalService,
    ) { }
}
