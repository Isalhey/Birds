/**
 * Routing Module
 * 
 * @NgModule
 * @imports (Router Module) //import
 * @exports (RouterModule)
 *
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { BirdsComponent }       from './birds/birds.component';
import { BirdDetailComponent }       from './birds/bird-detail/bird-detail.component';
import { BirdSearchComponent }       from './birds/bird-search/bird-search.component';

//Pulls the routes into a variable routes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: BirdDetailComponent },
  { path: 'birds',     component: BirdsComponent },
  { path: 'search', component: BirdSearchComponent }
];
 
 //RouterModule exported for other components to access
 //declarables such as RouterLink and RouterOutlet
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
