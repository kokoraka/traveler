import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AuthService } from './../service/auth.service';
import { UserService } from '../service/user.service';
import { EmployeeService } from '../service/employee.service';
import { TransportationService } from '../service/transportation.service';
import { TransactionService } from '../service/transaction.service';
import { RouteService } from '../service/route.service';
import { ReportService } from '../service/report.service';
import { AuthGuard } from '../service/auth-guard.service';

import { AuthModule } from './../auth/auth.module';

import { CoreModule } from './../core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardSidebarComponent } from './sidebar/sidebar.component';

import { DashboardHomeComponent } from './home/home.component';

import { DashboardUserComponent } from './user/user.component';
import { DashboardUserChangeComponent } from './user/change/change.component';

import { DashboardEmployeeComponent } from './employee/employee.component';
import { DashboardEmployeeAddComponent } from './employee/add/add.component';
import { DashboardEmployeeChangeComponent } from './employee/change/change.component';

import { DashboardTransactionComponent } from './transaction/transaction.component';

import { DashboardReportComponent } from './report/report.component';
import { DashboardReportIncomeComponent } from './report/income/income.component';
import { DashboardReportInventoryComponent } from './report/inventory/inventory.component';

import { DashboardTransportationComponent } from './transportation/transportation.component';
import { DashboardTransportationAddComponent } from './transportation/add/add.component';
import { DashboardTransportationChangeComponent } from './transportation/change/change.component';

import { DashboardRouteComponent } from './route/route.component';
import { DashboardRouteAddComponent } from './route/add/add.component';
import { DashboardRouteChangeComponent } from './route/change/change.component';


@NgModule({
  imports: [
    CoreModule,
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardSidebarComponent,
    DashboardUserComponent,
    DashboardUserChangeComponent,
    DashboardEmployeeComponent,
    DashboardEmployeeAddComponent,
    DashboardEmployeeChangeComponent,
    DashboardTransactionComponent,
    DashboardReportComponent,
    DashboardReportIncomeComponent,
    DashboardReportInventoryComponent,
    DashboardTransportationComponent,
    DashboardTransportationAddComponent,
    DashboardTransportationChangeComponent,
    DashboardRouteComponent,
    DashboardRouteAddComponent,
    DashboardRouteChangeComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    EmployeeService,
    TransportationService,
    TransactionService,
    RouteService,
    ReportService
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { 

}
