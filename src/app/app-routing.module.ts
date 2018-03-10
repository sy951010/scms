import {ManagerComponent} from './user/manager/manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './common/index/index.component';
import { NoticeComponent } from './common/notice/notice.component';
import { MemberComponent } from './stu-manage/member/member.component';
import { LoginComponent } from './login/login.component';
import { SellerActComponent } from './data/seller-act/seller-act.component';
import { PrimitComponent } from './process/primit/primit.component';
import { ContestMoreComponent } from './contest/contest-more/contest-more.component';
import { EditComponent } from './contest/edit/edit.component';
import { ReviewComponent } from './process/review/review.component';
import { HandErrorComponent } from './process/hand-error/hand-error.component';
import { ContestListComponent } from './contest/contest-list/contest-list.component';



// 二级路由
const AppChildRoutes: Routes = [
    { path: 'notice', component: NoticeComponent },
    { path: 'primit', component: PrimitComponent }, 
    { path: 'review', component: ReviewComponent },    
    { path: 'handerror', component: HandErrorComponent },           
    { path: 'contestList', component: ContestMoreComponent },
    { path: 'contestMore/:id', component: ContestListComponent },    
    { path: 'contest/edit', component: EditComponent },                    
    { path: 'manager', component: ManagerComponent },
    { path: 'member', component: MemberComponent },
    { path: 'sellerActive', component: SellerActComponent },
    { path: '**', redirectTo: 'notice' }
];

// 一级路由
const routes: Routes = [
    { path: 'index', component: IndexComponent, children: AppChildRoutes },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
