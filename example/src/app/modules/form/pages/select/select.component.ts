import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';
import { Item } from 'ng-tools-ui';

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
        }
    ];

    dropdownValue = 2;

    selectValue = 'Birmingham';

    diyOption: Item;

    selectValues = [1, 2];


    codes = [
        `<div tsDropdown>
    <button tsToggle class="btn btn-white dropdown-toggle">Default</button>
    <div tsDropMenu>
        <button class="dropdown-item pointer">Item One</button>
        <button class="dropdown-item pointer">Item Two</button>
        <button class="dropdown-item pointer">Item Three</button>
    </div>
</div>`,
        `<ts-dropdown [items]="dropdowns" [(value)]="dropdownValue" text="Select"></ts-dropdown>`,
        `dropdowns = [
    { text: 'Apple', value: 1 },
    { text: 'Board', value: 2 },
    { text: 'Card', value: 3 },
];
dropdownValue = 2;`,
        `<ts-select class="form-control p-0" [items]="diySelects" [(value)]="selectValue"></ts-select>`,
        `diySelects = [
        {
            content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/71.jpg"> Jane\`,
            text: 'Jane',
            value: 1
        },
        {
            content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/72.jpg"> Rose\`,
            text: 'Rose',
            value: 2
        },
        {
            content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/73.jpg"> Revern\`,
            text: 'Revern',
            value: 3
        },
        {
            content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/74.jpg"> Alis\`,
            text: 'Alis',
            value: 4
        }
    ];
    selectValue = 1`,
        `<div tsSelects [items]="diySelects" [(values)]="selectValues"></div>`,
        `diySelects = [
            {
                content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/71.jpg"> Jane\`,
                text: 'Jane',
                value: 1
            },
            {
                content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/72.jpg"> Rose\`,
                text: 'Rose',
                value: 2
            },
            {
                content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/73.jpg"> Revern\`,
                text: 'Revern',
                value: 3
            },
            {
                content: \`< img class= "rounded-circle" src = "https://randomuser.me/api/portraits/thumb/women/74.jpg"> Alis\`,
                text: 'Alis',
                value: 4
            }
        ];
        selectValues = [1,2]`,
    ];

    constructor(public global: GlobalService) { }

    ngOnInit() {
    }

}
