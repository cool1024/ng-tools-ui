import { Component } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent {

    constructor(public theme: ThemeService) { }
}
