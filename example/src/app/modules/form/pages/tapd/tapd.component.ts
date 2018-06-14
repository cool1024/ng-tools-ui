import { Component } from '@angular/core';
import { TapdTask, TapdTaskItem } from './tapd.interface';
import { ModalService } from './../../../../../_tools-ui';
import { TapdTaskModalComponent } from './tapd-task-modal.component';

@Component({
    templateUrl: './tapd.component.html',
    styleUrls: ['tapd.component.scss'],
})
export class TapdComponent {

    tasks = new Array<TapdTask>();

    showTaskAddForm = false;

    addTaskTitle: string;

    constructor(
        private modal: ModalService
    ) {
        this.tasks.push(
            {
                taskId: 0,
                taskName: '看番计划',
                taskItems: [
                    { taskName: '看完线上的怎么可能是女生啊', taskFileNum: 1, taskMessageNum: 2, taskCloseTime: '今天截止', taskDescription: '这是一段描述信息' }
                ],
                isEditMode: true,
                isAddMode: true
            }
        );
    }

    showAddTaskItemEdit(task: TapdTask) {
        task.isAddMode = true;
    }

    addTaskItem(item: TapdTaskItem, task: TapdTask) {
        task.isAddMode = false;
        task.taskItems.push(item);
    }

    closeAddTaskForm() {
        this.showTaskAddForm = false;
        this.addTaskTitle = '';
    }

    addTask() {
        this.showTaskAddForm = false;
        this.tasks.push({ taskId: 0, taskName: this.addTaskTitle, taskItems: [], isEditMode: false });
        this.addTaskTitle = '';
    }

    updateTask(task: TapdTask) {
        task.isEditMode = false;
    }

    removeTask(index: number) {
        this.tasks.splice(index, 1);
    }

    showTaskItemModal(item: TapdTaskItem) {
        const modal = this.modal.create(TapdTaskModalComponent, { center: true, overflow: 'hidden' });
        modal.instance.taskItem = item;
        modal.open();
    }
}
