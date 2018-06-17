import { Component } from '@angular/core';
import { WindowViewService, WindowService } from 'ng-tools-ui';

@Component({
    templateUrl: './source-view.component.html',
    styleUrls: ['./tapd.component.scss'],
})
export class SourceViewComponent {

    constructor(
        public view: WindowViewService,
        private window: WindowService,
    ) {
    }

    test() {
        // this.window.pop();
        this.window.push(SourceViewComponent).present();
    }
}
