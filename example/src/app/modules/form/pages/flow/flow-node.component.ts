import { Component, OnInit, Input } from '@angular/core';
import { FlowMainNode } from './flow.interface';

@Component({
    selector: 'app-flow-node',
    template: `
        <div class="flow-node-large-card">
            <div class="position-relative">
                <div class="card">
                    <div class="card-header flow-header-primary text-white d-flex justify-content-between">
                        <span>{{flowNode.nodeTitle}}</span>
                        <span class="fa fa-file-text mt-1 fa-lg"></span>
                    </div>
                    <div class="card-body"></div>
                </div>
                <div class="flow-node-plus text-center">
                    <button class="pointer text-center">
                        <i class="fa fa-plus-square-o"></i>
                    </button>
                </div>
            </div>
        </div>`,
    styleUrls: ['./flow.component.css']
})
export class FlowNodeComponent implements OnInit {

    @Input() flowNode: FlowMainNode;

    constructor() { }

    ngOnInit() { }
}
