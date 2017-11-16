import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { AdminComponent } from './admin/admin.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
const appRoute: Routes = [
  {
    path:'',
    component: MemberListComponent

  },
  {
    path:'about',
    component: MemberListComponent

  },
  {
    path:'admin',
    component: MemberListComponent

  },
  {
    path:'add',
    component: AdminComponent

  },
  {
    path:'info/:id',
    component: MemberDetailsComponent

  }
]


export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoute);
