import { Component } from '@angular/core';
import { TapdTaskItem, TaskBadge } from './tapd.interface';
import { QuillOptions as defaultOptions } from '../../../../configs/quill.config';
import { QuillOptions } from 'ng-tools-ui';

@Component({
    templateUrl: './tapd-task-modal.component.html',
    styleUrls: ['tapd.component.scss'],
})
export class TapdTaskModalComponent {

    taskItem: TapdTaskItem;

    options: QuillOptions;

    badges = new Array<TaskBadge>();

    isQuillEdit = false;

    constructor() {
        this.options = JSON.parse(JSON.stringify(defaultOptions));
        this.options.modules.toolbar = [
            [
                { header: [1, 2, 3, 4, false] },
                'bold', 'italic', 'blockquote',
                { 'align': [] },
                { 'list': 'ordered' },
                { 'list': 'bullet' },
                'link', 'image'
            ]
        ];
        this.badges.push(
            { badgeId: 0, badgeLabel: '很重要', badgeType: 'danger' },
            { badgeId: 1, badgeLabel: '快点做完', badgeType: 'primary' },
        );
    }

    showQuillEdit() {
        this.isQuillEdit = true;
    }

    saveQuillContent() {
        this.isQuillEdit = false;
    }
}
