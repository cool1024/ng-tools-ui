/**
 * 流程数据格式
 */
export interface FlowNode {
    nodeTitle: string;
    parentNode: FlowNode,
    datas?: any,
}
export class FlowBranch implements FlowNode {

    public childNodes: FlowBranchNode[];

    constructor(
        public nodeTitle: string,
        public parentNode: FlowNode = null,
        public datas?: any
    ) {
        this.childNodes = [new FlowBranchNode('分支一'), new FlowBranchNode('分支二')];
        this.childNodes[0].childNodes.push(new FlowMainNode('内部节点'));
    }

}

export class FlowBranchNode implements FlowNode {

    public childNodes: FlowMainNode[];

    constructor(
        public nodeTitle: string,
        public parentNode: FlowNode = null,
        public datas?: any
    ) {
        this.childNodes = [];
    }

}

export class FlowMainNode implements FlowNode {
    constructor(
        public nodeTitle: string,
        public parentNode: FlowNode = null,
        public datas?: any
    ) { }
}