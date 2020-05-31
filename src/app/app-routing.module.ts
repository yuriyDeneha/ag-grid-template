import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {CommunityEditionComponent} from './component/community-edition/community-edition.component';


const routes: Routes = [
  { path: '', component: HomePageComponent  },
  { path: 'community',  component: CommunityEditionComponent },
  { path: 'about',  component: AboutMeComponent },
  { path: '**',     redirectTo: '/'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
