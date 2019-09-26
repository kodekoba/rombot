import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { PositionsComponent } from './positions/positions.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:SearchComponent},
  {path:'jobs', component:ListComponent},
  {path:'jobs/:id/positions', component:PositionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
