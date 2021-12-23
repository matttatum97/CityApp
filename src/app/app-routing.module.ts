import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CitysComponent } from './citys/citys.component';
import { EditCityComponent } from './edit-city/edit-city.component';

const routes: Routes = [
  {path: "", component:CitysComponent},
  {path: "citys", component:CitysComponent},
  {path: "citys/:id", component:CityComponent},
  {path: "city/:id/edit-city", component:EditCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
