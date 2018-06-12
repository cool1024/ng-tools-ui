import { Component, OnInit } from '@angular/core';
import { FlowNode, FlowMainNode, FlowBranch } from './flow.interface';

@Component({
    selector: 'app-flow',
    templateUrl: './flow.component.html',
    styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

    flowNodes = new Array<FlowNode>();

    types = [
        FlowMainNode,
        FlowBranch,
    ]

    constructor() {
        this.flowNodes.push(new FlowMainNode('提交申请'), new FlowBranch('新分支节点'), new FlowBranch('新分支节点'));
    }

    ngOnInit() { }

    nodeIs(flowNode: FlowNode, typeIndex: number): boolean {
        return flowNode instanceof this.types[typeIndex];
    }

    removeNode(index: number) {
        this.flowNodes.splice(index, 1);
    }
}
