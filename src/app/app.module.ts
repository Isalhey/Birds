/**
 * Application root module
 *
 * @imports (@angular, subcomponents)
 * @NgModule decorator 
 * @imports
*/

import './rxjs-extensions';

import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Imports for custom components
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BirdDetailComponent }  from './birds/bird-detail/bird-detail.component';
import { BirdsComponent }       from './birds/birds.component';
import { BirdService }          from './birds/bird.service';
import { BirdSearchComponent }  from './birds/bird-search/bird-search.component';
import { AppRoutingModule }     from './app-routing.module';

/**
 * @NgModule declarations
 * Provides metadata globally available for the application
 */
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BirdDetailComponent,
    BirdsComponent,
    BirdSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [BirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
