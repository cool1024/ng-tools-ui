import { Component } from '@angular/core';
import { GlobalService } from '../../../../cores/services';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent {

    constructor(
        public global: GlobalService,
    ) { }
}
