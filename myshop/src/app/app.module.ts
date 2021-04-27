import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { PanelTopComponent } from './components/panel-top/panel-top.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { AdmProductsComponent } from './components/admin/adm-products/adm-products.component';
import { ChartsModule } from 'ng2-charts';
const appRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'adm_dashboard', component: DashboardComponent },
  { path: 'adm_products', component: AdmProductsComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductsComponent,
    PanelTopComponent,
    CartComponent,
    DashboardComponent,
    MenuComponent,
    AdmProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
