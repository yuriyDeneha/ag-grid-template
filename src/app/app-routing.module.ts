import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {CommunityEditionComponent} from './component/community-edition/community-edition.component';
import {EnterpriseEditionComponent} from './component/enterprise-edition/enterprise-edition.component';
import {StaticPaginationComponent} from './component/pagination/static-pagination/static-pagination.component';
import {ServerSidePaginationComponent} from './component/pagination/server-side-pagination/server-side-pagination.component';

const routes: Routes = [
  { path: '',       component: HomePageComponent  },
  { path: 'community',  component: CommunityEditionComponent },
  { path: 'enterprise',  component: EnterpriseEditionComponent },
  { path: 'about',  component: AboutMeComponent },
  { path: 'staticpagination', component: StaticPaginationComponent},
  { path: 'communitypagination', component: ServerSidePaginationComponent},
  { path: '**',     redirectTo: '/'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
