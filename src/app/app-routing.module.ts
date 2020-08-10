import { CarsTableComponent } from './components/cars-table/cars-table.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'cars',  component: CarsTableComponent },
  { path: '**',     redirectTo: '/cars'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
