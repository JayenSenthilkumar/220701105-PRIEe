import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyGridComponent } from './components/property-grid/property-grid.component';
import { DashboardComponent } from './components/dashboard/dbcomponent';

const routes: Routes = [
  { path: '', component: PropertyGridComponent }, // Homepage
  { path: 'dashboard', component: DashboardComponent } // Dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
