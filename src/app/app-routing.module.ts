import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { OrdersComponent } from './layout/orders/orders.component';
import { PaymentComponent } from './layout/payment/payment.component';
import { ProductsComponent } from './layout/products/products.component';
import { UsersComponent } from './layout/users/users.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
    {path : 'home', component: HomeComponent,},
    {path : 'order', component: OrdersComponent},
    {path : 'payment', component: PaymentComponent},
    {path : 'product', component: ProductsComponent},
    {path : 'user', component: UsersComponent},
    {path : '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
