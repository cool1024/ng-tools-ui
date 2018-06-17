import { Component, Input, ViewChild, } from '@angular/core';
import { Badge } from 'ng-tools-ui';

@Component({
    selector: 'ts-badge-select',
    template: `
    <div tsDropdown #tsDropdown="tsDropdown" class="align-middle">
        <i tsToggle class="text-muted text-primary-hover pt-2 pr-2 pb-2 fa fa-plus-circle fa-lg pointer" aria-hidden="true"></i>
        <div tsDropMenu [modalSize]="600">
            <ng-container *ngIf="!isEditMode">
                <div class="input-group border-bottom pl-1 pb-2" style="width: 300px;">
                    <input (click)="holdMenu()" [(ngModel)]="badgeKey" type="text" placeholder="搜索、创建标签" class="form-control border-0">
                </div>
                <div *ngFor="let badge of listBadges" class="d-flex justify-content-between dropdown-item pointer pl-3 pr-3 mt-2 mb-2">
                    <div>
                        <span style="vertical-align: 12%;" class="badge badge-{{badge.badgeColor}} badge-pill">&nbsp;</span>
                        <span style="max-width: 240px" class="ml-2 d-inline-block text-truncate">{{badge.badgeLabel}}</span>
                    </div>
                    <div>
                        <span (click)="showEdit(badge)" class="text-primary-hover fa fa-fw fa-pencil"></span>
                        <span class="fa fa-fw fa-check ml-1"></span>
                    </div>
                </div>
                <div *ngIf="listBadges.length<=0" class="badge-color-pad d-flex justify-content-around mt-2 pl-2 pr-2">
                    <span (click)="activeColor='primary';holdMenu()" class="pointer badge badge-primary badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='primary'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="activeColor='success';holdMenu()" class="pointer badge badge-success badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='success'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="activeColor='warning';holdMenu()"
                        class="pointer badge badge-warning badge-pill rounded-circle text-white">
                        <i [class.invisible]="activeColor!=='warning'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="activeColor='danger';holdMenu()" class="pointer badge badge-danger badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='danger'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="activeColor='dark';holdMenu()" class="pointer badge badge-dark badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='dark'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="activeColor='purple';holdMenu()" class="pointer badge badge-purple badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='purple'" class="fa fa-lg fa-check"></i>
                    </span>
                </div>
                <div *ngIf="listBadges.length<=0" class="text-center mt-3 pl-3 pr-3">
                    <button (click)="createBadge()" class="btn btn-primary btn-block">创建</button>
                </div>
            </ng-container>
            <ng-container *ngIf="isEditMode">
                <div class="input-group border-bottom pl-1 pb-2" style="width: 300px;">
                    <input (click)="holdMenu()" [(ngModel)]="badge.badgeLabel"
                        type="text" placeholder="标签的名字" class="form-control border-0">
                </div>
                <div class="badge-color-pad d-flex justify-content-around mt-2 pl-2 pr-2">
                    <span (click)="badge.badgeColor=activeColor='primary';holdMenu()" 
                        class="pointer badge badge-primary badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='primary'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="badge.badgeColor=activeColor='success';holdMenu()" 
                        class="pointer badge badge-success badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='success'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="badge.badgeColor=activeColor='warning';holdMenu()"
                        class="pointer badge badge-warning badge-pill rounded-circle text-white">
                        <i [class.invisible]="activeColor!=='warning'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="badge.badgeColor=activeColor='danger';holdMenu()" 
                        class="pointer badge badge-danger badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='danger'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="badge.badgeColor=activeColor='dark';holdMenu()" 
                        class="pointer badge badge-dark badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='dark'" class="fa fa-lg fa-check"></i>
                    </span>
                    <span (click)="badge.badgeColor=activeColor='purple';holdMenu()" 
                        class="pointer badge badge-purple badge-pill rounded-circle">
                        <i [class.invisible]="activeColor!=='purple'" class="fa fa-lg fa-check"></i>
                    </span>
                </div>
                <div class="text-right mt-3 pl-3 pr-3">
                    <button (click)="isEditMode=false;holdMenu()" class="btn btn-white mr-2">返回</button>
                    <button class="btn btn-danger mr-2">删除</button>
                    <button class="btn btn-primary">保存</button>
                </div>
            </ng-container>
        </div>
    </div>`,
    styleUrls: ['./tapd.component.scss'],
})
export class BadgeSelectComponent {

    @Input() badges = new Array<Badge>();

    @Input() activeBadges = new Array<Badge>();

    @ViewChild('tsDropdown') dropdown: any;

    badgeKey = '';

    activeColor = 'primary';

    isEditMode = false;

    badge: Badge;

    get listBadges(): Badge[] {
        if (this.badgeKey.trim()) {
            return this.badges.filter(badge => ~badge.badgeLabel.indexOf(this.badgeKey));
        } else {
            return this.badges;
        }
    }

    isActiveItem(badge: Badge): boolean {
        return !!~this.activeBadges.indexOf(badge);
    }

    createBadge() {
        this.badges.push({
            badgeLabel: this.badgeKey,
            badgeColor: this.activeColor,
        });
        this.badgeKey = '';
    }

    holdMenu() {
        setTimeout(() => { this.dropdown.present(); });
    }

    showEdit(badge: Badge) {
        this.badge = badge;
        this.isEditMode = true;
        this.activeColor = badge.badgeColor;
        this.holdMenu();
    }
}
