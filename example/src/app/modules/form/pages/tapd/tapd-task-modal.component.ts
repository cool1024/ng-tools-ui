import { Component } from '@angular/core';
import { TapdTaskItem } from './tapd.interface';
import { QuillOptions as defaultOptions } from '../../../../configs/quill.config';
import { QuillOptions, Badge, ModalService } from 'ng-tools-ui';
import { TaskLevelLabels } from './tapd.data';
import { WindowService } from '../../../../../_tools-ui';
import { SourceViewComponent } from './source-view.component';

@Component({
    templateUrl: './tapd-task-modal.component.html',
    styleUrls: ['tapd.component.scss'],
})
export class TapdTaskModalComponent {

    taskItem: TapdTaskItem;

    options: QuillOptions;

    badges = new Array<Badge>();

    badgeKey = '';

    isQuillEdit = false;

    showAllContent = false;

    canEditTitle = false;

    taskLevelLabels = TaskLevelLabels;

    constructor(
        public modal: ModalService,
        public window: WindowService,
    ) {
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
            { badgeLabel: '很重要', badgeColor: 'danger' },
            { badgeLabel: '快点做完', badgeColor: 'primary' },
        );
    }

    showQuillEdit() {
        this.isQuillEdit = true;
    }

    saveQuillContent() {
        this.isQuillEdit = false;
    }

    showSource() {
        const window = this.window.push(SourceViewComponent);
        window.present();
    }
}
