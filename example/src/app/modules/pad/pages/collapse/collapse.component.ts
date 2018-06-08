import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

    codes = [
        `import { CollapseModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., CollapseModule ],
    ...
})
export class MyModule { }`,
        `<div tsCollapses>
    <div tsToggle>1.点我展开>></div>
    <div tsCollapse>我是1的内容</div>
    <div tsToggle>2.点我展开>></div>
    <div tsCollapse>我是2的内容</div>
</div>`
    ];

    constructor() { }

    ngOnInit() { }

}
