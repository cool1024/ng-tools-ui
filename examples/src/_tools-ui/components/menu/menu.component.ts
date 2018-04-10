import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuModel, MenuGroup, MenuItem } from './menu.interface';
import { DomAttr } from '../../commons/extends/attr.class';


@Component({
    selector: `ts-menu`,
    exportAs: 'tsMenu',
    template: `
    <div class="h-100 pt-2">
        <div class="media pl-2 mb-2 pt-2" *ngIf="avatars">
            <img class="mr-3 rounded-circle" [src]="avatars[0]" height="40" width="40" alt="Avatar ">
            <div class="media-body">
                <h6 class="mt-0 mb-0 d-inline-block font-weight-bold">{{avatars[1]}}</h6>
                <p class="mb-0 d-inline-block">{{avatars[2]}}</p>
            </div>
        </div>
        <hr *ngIf="avatars" class="mt-0 mb-2 ml-3 mr-3">
        <ng-container *ngFor="let model of items;">
            <p class="mb-1 pt-2 pl-3">{{model.modelTitle | titlecase}}</p>
            <div class="menu-block pr-3 {{group.active?activeMainClass:''}}" *ngFor="let group of model.menuGroups">
                <div class="menu-main pointer pl-2" (click)="toggleGroup(group)">
                    <div class="d-table w-100 pb-1 {{group.active?textClass:''}}">
                        <div class="d-table-cell text-center ts-icon">
                            <i [class]="group.icon" aria-hidden="true"></i>
                        </div>
                        <div class="d-table-cell">
                            <span>{{group.groupTitle | titlecase}}</span>
                        </div>
                        <div class="d-table-cell text-right pr-2">
                            <i class="fa fa-angle-down" aria-hidden="true"
                            [class.icon-up]="group.active" [class.icon-down]="!group.active"></i>
                        </div>
                    </div>
                </div>
                <div class="menu-child-block pr-3" [class.child-open]="group.active" [class.child-close]="!group.active">
                    <div class="menu-child-item pl-2" *ngFor="let item of group.menuItems;index as i">
                        <div class="d-table w-100 pointer {{item.active?textClass:''}}" (click)="toggleMenu(group,i)">
                            <div class="d-table-cell text-center ts-icon">
                                <!--<img src="https://png.icons8.com/small/50/000000/sphere.png" height="14">-->
                                <i class="fa fa-fw fa-minus-square-o" aria-hidden="true"></i>
                            </div>
                            <div class="d-table-cell">
                                <span>{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ng-container>
        <div class="menu-temp-bar"></div>
    </div>`,
    styles: [
        `
        .ts-icon{
            width:30px;
        }
        .icon-up {
            animation: icon-up 0.5s ease-out forwards;
        }
        .icon-down {
            animation: icon-down 0.5s ease-out forwards;
        }
        .menu-block {
            overflow-y: hidden;
            font-size: 14px;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            user-select: none;
            border-left-width:3px;
            border-left-style:solid;
            border-left-color:transparent;
        }
        .menu-main{
            line-height:35px;
        }
        .menu-child-block{
            line-height:35px;
        }
        .child-close {
            max-height: 0px;
            opacity: 0.5;
            transform-origin: 50% 0%;
            transition: all 0.5s linear;
        }
        .child-open {
            max-height: 400px;
            opacity: 1;
            transform-origin: 50% 0%;
            transition: all 1.5s linear;
        }
        @keyframes icon-up {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(180deg);
            }
        }
        @keyframes icon-down {
            0% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
        .menu-temp-bar{
            height:60px;
        }
        .bg-primary-fill{
            background-color:#007bff11;
        }
        .bg-secondary-fill{
            background-color:#6c757d11;
        }
        .bg-success-fill{
            background-color:#28a74511;
        }
        .bg-danger-fill{
            background-color:#dc354511;
        }
        .bg-warning-fill{
            background-color:#ffc10711;
        }
        .bg-dark-fill{
            background-color:#343a4011;
        }
        .bg-info-fill{
            background-color:#17a2b811;
        }
        `,
    ]
})
export class MenuComponent extends DomAttr {

    @Input() items: MenuModel[];

    @Input() avatars: [string, string, string];

    @Output() menuActiveChange = new EventEmitter<string>();

    get activeMainClass(): string {
        return `${this.borderClass} bg-${this.color}-fill`;
    }

    constructor() {
        super();
        this.items = new Array<MenuModel>();
    }

    toggleGroup(group: MenuGroup) {
        const tempActive = group.active;
        this.setAllInActive();
        group.active = !tempActive;
    }

    toggleMenu(group: MenuGroup, itemIndex: number) {
        this.setAllInActive();
        group.active = true;
        group.menuItems[itemIndex].active = true;
        this.menuActiveChange.emit(group.menuItems[itemIndex].url);
    }

    setAllInActive() {
        this.items.forEach(item => {
            item.menuGroups.forEach(a => {
                a.active = false;
                a.menuItems.forEach(b => {
                    b.active = false;
                });
            });
        });
    }

}
