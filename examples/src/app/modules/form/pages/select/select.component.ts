import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

    dropdowns = [
        { text: 'Apple', value: 1 },
        { text: 'Board', value: 2 },
        { text: 'Card', value: 3 },
    ];

    stringDropdowns = ['Apple', 'Board', 'Card'];

    diySelects = [
        {
            content: `<img class="rounded-circle" src="https://randomuser.me/api/portraits/thumb/women/71.jpg"> Jane`,
            text: 'Jane',
            value: 1
        },
        {
            content: `<img class="rounded-circle" src="https://randomuser.me/api/portraits/thumb/women/72.jpg"> Rose`,
            text: 'Rose',
            value: 2
        },
        {
            content: `<img class="rounded-circle" src="https://randomuser.me/api/portraits/thumb/women/73.jpg"> Revern`,
            text: 'Revern',
            value: 3
        },
        {
            content: `<img class="rounded-circle" src="https://randomuser.me/api/portraits/thumb/women/74.jpg"> Alis`,
            text: 'Alis',
            value: 4
        },
    ];

    dropdownValue = 2;

    selectValue = 'Birmingham';

    diyOption: any;

    constructor(public theme: ThemeService) { }

    ngOnInit() {
    }

}
