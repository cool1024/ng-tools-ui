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
} from 'ng-tools-ui';

/*路由模块*/
import { FormRoutingModule, declarationComponents } from './form.routing';
import { FlowNodeComponent } from './pages/flow/flow-node.component';
import { FlowBranchComponent } from './pages/flow/flow-branch.component';
import { FlowBranchNodeComponent } from './pages/flow/flow-branch-node.component';

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
    ],
    declarations: [
        declarationComponents,
        FlowNodeComponent,
        FlowBranchComponent,
        FlowBranchNodeComponent,
    ]
})
export class FormModule { }
