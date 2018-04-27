import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagination, ConfirmService, ToastService } from 'ng-tools-ui';
import { ApiData, SearchParams } from '../../../../cores/classes';
import { GlobalService } from '../../../../cores/services';
// import { GoodsTypeService } from '../../services/goods-type.service';
import { Goods } from './../../interfaces/goods.interface';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/switchMap';
import { GoodsService } from '../../services/goods.service';

@Component({
    selector: 'app-goods-table',
    templateUrl: './goods-table.component.html',
    // styleUrls: ['./goods-table.component.scss']
})
export class GoodsTableComponent implements OnInit {

    theads = ['#', '图', '名称', '单价', '库存', '创建时间', '状态', '操作'];

    search = new SearchParams({ start: '', end: '' });

    list = new Array<Goods>();

    loading = false;

    pagination = new Pagination();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private confirm: ConfirmService,
        private toast: ToastService,
        public global: GlobalService,
        private goodsService: GoodsService,
    ) { }

    ngOnInit() {
        this.activatedRoute.url
            .skipWhile(() => this.router.url !== '/store/goods')
            .subscribe(() => this.loadDatas());
    }

    doSearch() {
        this.pagination.reset();
        this.loadDatas();
    }

    doReset() {
        this.search.clean();
        this.doSearch();
    }

    loadDatas() {
        this.loading = true;
        this.goodsService.searchUser(this.pagination, this.search)
            .subscribe({
                next: res => {
                    this.pagination.total = res.datas.total;
                    this.list = res.datas.rows;
                },
                complete: () => this.loading = false
            });
    }

    confirmDelete(goods: Goods) {
        this.confirm.danger('删除确认', `您确认删除商品'${goods.goodsName}'吗？`)
            .switchMap<void, ApiData>(() => this.goodsService.deleteGoods(goods.id))
            .subscribe(() => {
                this.list.splice(this.list.indexOf(goods), 1);
                this.toast.success('删除成功', `成功删除商品'${goods.goodsName}`);
                this.loadDatas();
            });
    }

}
