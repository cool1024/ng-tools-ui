import { Component, Output, EventEmitter } from '@angular/core';
import { TapdTaskItem } from './tapd.interface';

@Component({
    selector: 'app-tapd-task-add',
    template: `
    <div class="tapd-task-card text-muted mb-2 ml-2 mr-2 p-2 rounded bg-white m-btn">
        <textarea [(ngModel)]="task.taskName" class="form-control" placeholder="任务标题"></textarea>
        <p class="mt-2">
            <i class="fa fa-fw fa-calendar-o"></i>截止期
            <span tsToggle [target]="datepicker" [bind]="datepicker" class="pointer">
                {{task.taskCloseTime?(task.taskCloseTime|date:'yyyy-MM-dd'):'选择日期'}}
            </span>
        </p>
        <div>
            <i class="fa fa-fw fa-user-o"></i>负责人
            <div tsDropdown class="align-top">
                <span tsToggle class="pointer">{{task.taskLeaderName||'待认领'}}</span>
                <div tsDropMenu>
                    <div (click)="setLeader('可儿')" class="dropdown-item user-select-item pointer pl-3 pr-3">
                        <div class="d-table w-100">
                            <div class="d-table-cell">
                                <img class="rounded-circle mr-2" height="40" width="40" src="assets/images/avatar/1.jpg">可儿
                            </div>
                            <div class="d-table-cell text-right">
                                <i class="fa fa-fw fa-check"></i>
                            </div>
                        </div>
                    </div>
                    <div (click)="setLeader('凛')" class="dropdown-item user-select-item pointer pl-3 pr-3">
                        <div class="d-table w-100">
                            <div class="d-table-cell">
                                <img class="rounded-circle mr-2" height="40" width="40" src="assets/images/avatar/2.jpg">凛
                            </div>
                            <div class="d-table-cell text-right">
                                <i class="fa fa-fw fa-check"></i>
                            </div>
                        </div>
                    </div>
                    <div (click)="setLeader('砂舞')" class="dropdown-item user-select-item pointer pl-3 pr-3">
                        <div class="d-table w-100">
                            <div class="d-table-cell user-select-item-text text-truncate">
                                <img class="rounded-circle mr-2" height="40" width="40" src="assets/images/avatar/3.jpg">砂舞
                            </div>
                            <div class="d-table-cell text-right">
                                <i class="fa fa-fw fa-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="text-right">
            <button (click)="cancelData()" class="btn btn-white">取消</button>
            <button (click)="saveData()" class="btn btn-primary">创建</button>
        </div>
    </div>
    <ts-datepicker
        color="primary"
        #datepicker="tsDatepicker"
        [(ngModel)]="task.taskCloseTime"
        [weekTitles]="['一', '二', '三', '四', '五', '六', '日']"
        [monthTitles]="['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']">
    </ts-datepicker>
    `,
    styleUrls: ['tapd.component.scss'],
})
export class TapdTaskAddComponent {

    @Output() saveHandle = new EventEmitter<TapdTaskItem>(false);

    @Output() cancelHandle = new EventEmitter<void>(false);

    task: TapdTaskItem;

    constructor() {
        this.resetData();
    }

    resetData() {
        this.task = {
            taskName: '看完线上的怎么可能是女生啊',
            taskEndTime: '2018-06-01',
            taskLeaderName: '未设置',
            taskLevel: 0,
        };
    }

    saveData() {
        this.saveHandle.emit({
            taskName: this.task.taskName,
            taskEndTime: this.task.taskEndTime,
            taskLeaderName: this.task.taskLeaderName,
            taskLevel: 0,
        });
        this.resetData();
    }

    cancelData() {
        this.cancelHandle.emit();
        this.resetData();
    }

    setLeader(leaderName: string) {
        this.task.taskLeaderName = leaderName;
    }
}
