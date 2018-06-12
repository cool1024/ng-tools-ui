import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlowBranchNode } from './flow.interface';

@Component({
    selector: 'app-flow-branch-node',
    template: `
        <div class="flow-node-card">
            <div *ngIf="position==='l'" class="flow-node-line-hidden flow-node-lt-hidden"></div>
            <div *ngIf="position==='r'" class="flow-node-line-hidden flow-node-rt-hidden"></div>
            <div class="position-relative">
                <div class="card">
                    <div class="card-header d-flex justify-content-between flow-header-muted text-white">
                        <span>学习报销</span>
                        <span class="fa fa-code-fork fa-lg mt-1"></span>
                    </div>
                    <div class="card-body">
                        <div class="text-right">
                            <button (click)="sendCloseEvent()" class="btn btn-sm btn-link text-danger">
                                <i class="fa fa-fw fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flow-node-plus text-center">
                    <button class="pointer text-center">
                        <i class="fa fa-plus-square-o"></i>
                    </button>
                </div>
                <app-flow-node *ngFor="let node of flowNode.childNodes" [flowNode]="node"></app-flow-node>
            </div>
            <div *ngIf="position==='l'" class="flow-node-line-hidden flow-node-lb-hidden"></div>
            <div *ngIf="position==='r'" class="flow-node-line-hidden flow-node-rb-hidden"></div>
        </div>
        `,
    styleUrls: ['./flow.component.css']
})
export class FlowBranchNodeComponent implements OnInit {

    @Input() flowNode: FlowBranchNode;

    @Output() closeHandle = new EventEmitter<void>();

    @Input() position = 'm';

    constructor() { }

    ngOnInit() { }

    sendCloseEvent() {
        console.log(111);
        this.closeHandle.emit();
    }
}
