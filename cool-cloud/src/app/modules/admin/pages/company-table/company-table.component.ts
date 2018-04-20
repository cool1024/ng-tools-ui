import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagination, ConfirmService, ToastService } from 'ng-tools-ui';
import { ThemeService } from '../../../../cores/services/theme.service';
import { CompanyService } from '../../services/company.service';
import { Company } from './../../interfaces/company.interfaces';
import { ApiData, SearchParams } from '../../../../cores/classes';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: './company-table.component.html',
})
export class CompanyTableComponent implements OnInit {


    theads = ['#', '图标', '商户名', '账号', '负责人电话', '创建时间', '状态', '操作'];

    search = new SearchParams({ start: '', end: '' });

    list = new Array<Company>();

    loading = false;

    pagination = new Pagination(200);

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        public theme: ThemeService,
        private confirm: ConfirmService,
        private companyService: CompanyService,
        private toast: ToastService,
    ) { }

    ngOnInit() {
        this.activatedRoute.url
            .skipWhile(() => this.router.url !== '/admin/company')
            .subscribe(() => this.loadDatas());
    }

    confirmDelete(company: Company) {
        this.confirm.danger('删除确认', `您确认删除商户'${company.companyName}'吗？`)
            .switchMap<void, ApiData>(() => this.companyService.deleteCompay(company.id))
            .subscribe(() => {
                this.list.splice(this.list.indexOf(company), 1);
                this.toast.success('删除成功', `成功删除商户'${company.companyName}`);
                this.loadDatas();
            });
    }

    loadDatas() {
        this.loading = true;
        this.companyService.searchCompany(this.pagination, this.search).subscribe({
            next: res => {
                this.pagination.total = res.datas.total;
                this.list = res.datas.rows;
            },
            complete: () => this.loading = false
        });
    }

}
