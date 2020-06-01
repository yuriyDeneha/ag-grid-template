import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import 'ag-grid-enterprise';
import {CommunityEditionComponent} from './component/community-edition/community-edition.component';
import {EnterpriseEditionComponent} from './component/enterprise-edition/enterprise-edition.component';
import {ServerSidePaginationComponent} from './component/pagination/server-side-pagination/server-side-pagination.component';
import {StaticPaginationComponent} from './component/pagination/static-pagination/static-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    CommunityEditionComponent,
    EnterpriseEditionComponent,
    ServerSidePaginationComponent,
    StaticPaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
