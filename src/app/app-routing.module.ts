import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ManagerComponent } from './manager/manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportsComponent } from './reports/reports.component';
import { TeammatesComponent } from './teammates/teammates.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'login', component: LoginpageComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'view', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
  { path: 'teammates', component: TeammatesComponent },
  {
    path: 'update-user',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
  },
  { path: 'report', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
