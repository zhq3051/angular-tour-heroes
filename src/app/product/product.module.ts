import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductComponent } from "./product.component";

import { ProductListComponent } from "./product-list.component";

@NgModule({
    imports: [ RouterModule.forChild([
        { path: 'product', component: ProductListComponent},
        {path: 'procom', component: ProductComponent}
        ])],
    declarations: [ ProductComponent, ProductListComponent],
    exports: [ RouterModule]
})
export class ProductModule {}