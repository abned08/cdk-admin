import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { CoreModule } from '../core/core.module';

export const appRoutes: Routes = [{ 
      path:'',component: AuthComponent, children: [
        {path: 'dashboard', loadChildren: '../dashboard-crm/dashboard-crm.module#DashboardCrmModule'},
        {path: 'dashboard-account', loadChildren: '../dashboard-accounts/dashboard-accounts.module#DashboardAccountsModule'},
        {path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule'},
        {path: 'tables', loadChildren: '../tables/tables.module#TablesModule'},
        {path: 'maps', loadChildren: '../maps/maps.module#MapsModule'},
        {path: 'charts', loadChildren: '../charts/charts.module#ChartsModule'},
        {path: 'forms',loadChildren:'../forms/forms.module#FormModule'},
        {path: 'guarded-routes',loadChildren:'../guarded-routes/guarded-routes.module#GuardedRoutesModule'}
      ]}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CoreModule,
    MatSidenavModule,
    PerfectScrollbarModule
  ],
  declarations: [AuthComponent], 
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AuthModule { }
