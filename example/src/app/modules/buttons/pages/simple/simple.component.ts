import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';
import { timer } from 'rxjs';

@Component({
    templateUrl: './simple.component.html',
})
export class SimpleComponent implements OnInit {

    codes = [
        `<button tsBtn>Default</button>
<button tsBtn color="white">White</button>
<button tsBtn color="primary">Primary</button>
<button tsBtn color="secondary">Scondary</button>
<button tsBtn color="success">Success</button>
<button tsBtn color="danger">Danager</button>
<button tsBtn color="warning">Warning</button>
<button tsBtn color="info">Info</button>
<button tsBtn color="light">Light</button>
<button tsBtn color="dark">Dark</button>`,
        `<button tsBtn sm>Small</button>
<button tsBtn>Default</button>
<button tsBtn lg>Large</button>`,
        `<button tsBtn color="white" outline>White</button>
<button tsBtn color="primary" outline>Primary</button>
<button tsBtn color="secondary" outline>Scondary</button>
<button tsBtn color="success" outline>Success</button>
<button tsBtn color="danger" outline>Danager</button>
<button tsBtn color="warning" outline>Warning</button>
<button tsBtn color="info" outline>Info</button>
<button tsBtn color="light" outline>Light</button>
<button tsBtn color="dark" outline>Dark</button>`,
        `<button tsBtn loading (submit)="doSubmit($event)">Submit</button>`,
        `import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    templateUrl: './example.html',
})
export class ExampleComponent {

    doSubmit(btn: any) {
        Observable.timer(2000).subscribe(() => {
            btn.dismiss();
        });
    }

}`,
        `export interface DomLoad {
    present(): void;
    dismiss(): void;
}`,
        `// 导入按钮模块在需要使用这个按钮组件的特性模块
import { ButtonModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., ButtonModule ],
    ...
})
export class MyModule { }`];

    constructor(public global: GlobalService) { }

    ngOnInit() {

    }

    doSubmit(btn: any) {
        timer(2000).subscribe(() => {
            btn.dismiss();
        });
    }
}
