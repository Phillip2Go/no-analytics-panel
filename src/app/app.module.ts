import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './core/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './core/pages/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './core/components/card/card.component';
import { ProductSalesChartComponent } from './core/components/charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './core/components/charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './core/components/charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './core/components/charts/store-sessions-chart/store-sessions-chart.component';
import { OrdersTableComponent } from './core/components/orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './core/components/mini-card/mini-card.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './core/service/data.service';
import { OwnOrdersTableComponent } from './core/components/own-orders-table/own-orders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent,
    MiniCardComponent,
    OwnOrdersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
