import { Component } from '@angular/core';
import { TapdTask, TapdTaskItem } from './tapd.interface';

@Component({
    templateUrl: './tapd.component.html',
    styleUrls: ['tapd.component.scss'],
})
export class TapdComponent {

    tasks = new Array<TapdTask>();

    constructor() {
        this.tasks.push(
            {
                taskId: 0,
                taskName: '看番计划',
                taskItems: [
                    { taskName: '看完线上的怎么可能是女生啊', taskFileNum: 1, taskMessageNum: 2, taskCloseTime: '今天截止' }
                ],
                isEditMode: false
            },
            {
                taskId: 1,
                taskName: '漫展计划',
                taskItems: [],
                isEditMode: false
            }
        );
    }

    showAddTaskItemEdit(task: TapdTask) {
        task.isEditMode = true;
    }

    addTaskItem(item: TapdTaskItem, task: TapdTask) {
        task.isEditMode = false;
        task.taskItems.push(item);
    }

}
