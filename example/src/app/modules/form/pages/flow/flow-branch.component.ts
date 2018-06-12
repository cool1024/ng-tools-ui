import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlowBranch, FlowBranchNode } from './flow.interface';

@Component({
    selector: 'app-flow-branch',
    template: `
    <div class="w-100">
        <div class="flow-node-circle-plus">
            <button (click)="addNewBranchNode()" class="pointer text-center">+</button>
        </div>
        <div class="w-100 d-flex flex-row justify-content-center">
            <app-flow-branch-node (closeHandle)="removeBranchNode(i)" *ngFor="let childNode of flowNode.childNodes;index as i" [flowNode]="childNode" [position]="getPosition(i)"></app-flow-branch-node>
        </div>
        <div class="flow-node-plus text-center flow-center-line">
            <button class="pointer text-center">
                <i class="fa fa-plus-square-o"></i>
            </button>
        </div>
    </div>
        `,
    styleUrls: ['./flow.component.css']
})
export class FlowBranchComponent implements OnInit {

    @Input() flowNode: FlowBranch;

    @Output() closeHandle = new EventEmitter<void>(false);

    constructor() { }

    ngOnInit() { }

    getPosition(index: number) {
        return index === 0 ? 'l' : (index === this.flowNode.childNodes.length - 1 ? 'r' : 'm');
    }

    addNewBranchNode() {
        this.flowNode.childNodes.push(new FlowBranchNode('新增分支节点'));
    }

    removeBranchNode(index: number) {
        if (this.flowNode.childNodes.length <= 2) {
            this.closeHandle.emit();
        } else {
            this.flowNode.childNodes.splice(index, 1);
        }
    }
}
