import { Injectable } from '@angular/core';
import { RequestService } from './../../../cores/services';
import { ApiData } from '../../../cores/classes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PermissionGroupItem, PermissionGroup } from '../interfaces/permission.interface';


@Injectable()
export class PermissionService {

    constructor(private request: RequestService) {
        this.request = this.request.withoutHost();
    }

    getAllPermission(): Observable<PermissionGroupItem[]> {
        return this.request.url('http://127.0.0.1:81/managerapi/permission/all').pipe(
            map<ApiData, PermissionGroupItem[]>(res => {
                const permissionGroupItems = new Array<PermissionGroupItem>();
                const permissionGroups = res.datas.groups;
                const permissions = res.datas.permissions;
                permissionGroups.forEach(item => {
                    permissionGroupItems.push({
                        permissionGroup: item,
                        permissions: permissions.filter(permission => permission.permissionGroupId === item.id),
                        open: false
                    });
                });
                return permissionGroupItems;
            })
        );
    }

    insertPermissionGroup(permissionGroup: PermissionGroup): Observable<ApiData> {
        return this.request.post('http://127.0.0.1:81/managerapi/permission/insert', permissionGroup);
    }

    updatePermissionGroup(permissionGroup: PermissionGroup): Observable<ApiData> {
        return this.request.put('http://127.0.0.1:81/managerapi/permission/update', permissionGroup);
    }
}