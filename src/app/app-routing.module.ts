import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DASH_PATH} from './routing/route-paths';
import {DashComponent} from './core/pages/dash/dash.component';

const routes: Routes = [
  { path: DASH_PATH, component: DashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
