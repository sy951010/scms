import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './common/index/index.component';
import { MemberComponent } from './user-manage/member/member.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './user/manager/manager.component';
import { SellerActComponent } from './data/seller-act/seller-act.component';
import { SortComponent } from './common/sort/sort.component';
import { EnlargeImgComponent } from './common/enlarge-img/enlarge-img.component';
import { HttpModule } from '@angular/http';
import { BuyerActComponent } from './data/buyer-act/buyer-act.component';
import { ApiService } from '../service/api.service';
import { HttpService } from '../service/http.service';
import { NoticeComponent } from './common/notice/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MemberComponent,
    LoginComponent,
    ManagerComponent,
    SellerActComponent,
    SortComponent,
    EnlargeImgComponent,
    BuyerActComponent,
    NoticeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxEchartsModule,
    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
  ],
  providers: [
    { provide: 'ApiService', useClass: ApiService },
    { provide: 'HttpService', useClass: HttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
