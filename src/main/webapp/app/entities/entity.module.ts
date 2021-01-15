import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.StooreProductModule),
      },
      {
        path: 'product-category',
        loadChildren: () => import('./product-category/product-category.module').then(m => m.StooreProductCategoryModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.StooreCustomerModule),
      },
      {
        path: 'product-order',
        loadChildren: () => import('./product-order/product-order.module').then(m => m.StooreProductOrderModule),
      },
      {
        path: 'order-item',
        loadChildren: () => import('./order-item/order-item.module').then(m => m.StooreOrderItemModule),
      },
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module').then(m => m.StooreInvoiceModule),
      },
      {
        path: 'shipment',
        loadChildren: () => import('./shipment/shipment.module').then(m => m.StooreShipmentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class StooreEntityModule {}
