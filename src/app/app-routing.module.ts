import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {HomePageComponent} from './component/home-page/home-page.component';


const routes: Routes = [
  { path: '',       component: HomePageComponent  },
  { path: 'about',  component: AboutMeComponent },
  { path: '**',     redirectTo: '/'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
