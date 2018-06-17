import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    DatePickerModule,
    DropdownModule,
    SearchModule,
    CheckboxModule,
    SelectModule,
    PrismModule,
    LoopCardModule,
    TabModule,
    CollapseModule,
    QuillModule,
    ModalModule,
    BadgeModule,
} from 'ng-tools-ui';
import { WindowModule } from './../../../_tools-ui';

/*路由模块*/
import { FormRoutingModule, declarationComponents } from './form.routing';
import { FlowNodeComponent } from './pages/flow/flow-node.component';
import { FlowBranchComponent } from './pages/flow/flow-branch.component';
import { FlowBranchNodeComponent } from './pages/flow/flow-branch-node.component';
import { TapdTaskAddComponent } from './pages/tapd/tapd-task-add.component';
import { TapdTaskModalComponent } from './pages/tapd/tapd-task-modal.component';
import { BadgeSelectComponent } from './pages/tapd/badge-select.component';
import { SourceViewComponent } from './pages/tapd/source-view.component';

@NgModule({
    imports: [
        FormsModule,
        FormRoutingModule,
        DatePickerModule,
        DropdownModule,
        CheckboxModule,
        SelectModule,
        PrismModule,
        LoopCardModule,
        TabModule,
        CollapseModule,
        SearchModule,
        ModalModule,
        BadgeModule,
        QuillModule.forChild(['assets/quill/quill.min.js']),
        WindowModule,
    ],
    declarations: [
        declarationComponents,
        FlowNodeComponent,
        FlowBranchComponent,
        FlowBranchNodeComponent,
        TapdTaskAddComponent,
        TapdTaskModalComponent,
        BadgeSelectComponent,
        SourceViewComponent,
    ],
    entryComponents: [
        TapdTaskModalComponent,
        SourceViewComponent,
    ]
})
export class FormModule { }
