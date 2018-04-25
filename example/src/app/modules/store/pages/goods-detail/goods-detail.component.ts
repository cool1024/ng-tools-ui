import { Component, OnInit } from '@angular/core';
import { ToastService, UploadConfig } from 'ng-tools-ui';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GlobalService } from '../../../../cores/services';
import { GoodsSpecifications, GoodsSpecification, Goods } from '../../interfaces/goods.interface';
import { ApiData } from '../../../../cores/classes';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-goods-detail',
    templateUrl: './goods-detail.component.html',
})
export class GoodsDetailComponent implements OnInit {

    defaultTh = ['单价', '库存', '是否使用'];

    goods: Goods = { id: 0, isActive: 1, goodsName: '' };

    goodsSpecifications = new Array<GoodsSpecification>();

    options: UploadConfig;

    constructor(
        public global: GlobalService,
        private active: ActivatedRoute,
        private toast: ToastService,
    ) {
        this.options = {
            queryString: '?x-oss-process=image/resize,h_130,w_130',
            // uploader: (file: File) => this.companyService.uploadCompayLogo(file)
        };
        this.goods.goodsSpecifications = [
            { colorName: '红色', specificationName: '500ML', price: 10.85 }
        ];
        // this.active.paramMap
        //     .skipWhile(params => !params.has('id'))
        //     .switchMap<ParamMap, ApiData>(params => {
        //         this.goods.id = parseInt(params.get('id'), 10);
        //         return this.companyService.getCompany(this.company.id);
        //     })
        //     .subscribe(res => this.company = res.datas);
    }

    ngOnInit() {
        this.goodsSpecifications.push(
            { specificationTitle: '商品颜色', specificationNames: ['红色', '黑色'] },
            { specificationTitle: '内存', specificationNames: ['3+32GB', '4+64GB', '8+123GB'] },
            { specificationTitle: '套餐', specificationNames: ['官方标配', '带耳机', '豪华礼包'] },
        );
    }


    addSpecification() {
        this.goodsSpecifications.push({
            specificationTitle: '新分类',
            specificationNames: ['规格一', '规格二']
        });
    }

    removeSpecification(index: number) {
        this.goodsSpecifications.splice(index, 1);
    }

    addSpecificationChild(goodsSpecification: GoodsSpecification) {
        goodsSpecification.specificationNames.push('新增规格');
    }

    removeSpecificationChild(goodsSpecification: GoodsSpecification, index: number) {
        goodsSpecification.specificationNames.splice(index, 1);
    }

    /**
     * 确认添加
     */
    confirmInsert(btn: any) {
        // this.companyService.insertCompany(this.company).subscribe({
        //     next: res => {
        //         this.toast.success('添加成功', `成功添加商户${this.company.companyName}`);
        //     },
        //     complete: () => {
        //         btn.dismiss();
        //     }
        // });
    }

    /**
     * 确认修改
     */
    confirmUpdate(btn: any) {
        // this.companyService.updateCompany(this.company).subscribe({
        //     next: res => {
        //         this.toast.success('修改成功', `成功修改商户${this.company.companyName}的信息`);
        //     },
        //     complete: () => {
        //         btn.dismiss();
        //     }
        // });
    }

    getSpecificationTr(): number[] {
        let count = 1;
        const trs = new Array<number>();
        let j = 0;
        this.goodsSpecifications.slice(0).forEach(goodsSpecification => {
            count *= goodsSpecification.specificationNames.length;
        });
        for (let i = 0; i < count; i++) {
            trs.push(j++);
        }
        return trs;
    }

    getSpecificationTd(index: number): { rowspan: number, name: string }[] {
        const tds = new Array<{ rowspan: number, name: string }>();
        const max = this.getSpecificationTr.length;
        this.goodsSpecifications.forEach((specification, i) => {
            const rowspan = this.getRowsapn(i);
            const names = this.getNames(i);
            const offset = index % rowspan;
            if (offset === 0) {
                tds.push({ rowspan, name: names[index / rowspan] });
            }
        });
        return tds;
    }

    getRowsapn(index: number): number {
        let count = 1;
        this.goodsSpecifications.slice(index + 1).forEach(goodsSpecification => {
            count *= goodsSpecification.specificationNames.length;
        });
        return count;
    }

    getNames(index: number) {
        let count = 1;
        const names = new Array<string>();
        this.goodsSpecifications.slice(0, index).forEach(goodsSpecification => {
            count *= goodsSpecification.specificationNames.length;
        });
        for (let i = 0; i < count; i++) {
            names.push(...this.goodsSpecifications[index].specificationNames);
        }
        return names;
    }

    trackFunc(index: number, item: any): number { return 0; }

}
