import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Store, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroService }          from './shared/hero.service';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { AddHeroComponent }     from './add-hero/add-hero.component';
import { HeroActions }          from './state/actions/hero.actions';
import { HeroEffects }          from './state/effects/hero.effects';
import reducer                  from './state/app-state';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.provideStore(reducer),
     StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    }),
    EffectsModule.run(HeroEffects)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    AddHeroComponent
  ],
  providers: [ HeroActions, HeroService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
        AddHeroComponent
    ]
})
export class AppModule { }
