import { Component } from '@angular/core';
import {Store} from '@ngrx/store';


import {AppState} from 'app/state/app-state';
import {HeroActions} from 'app/state/actions/hero.actions';
@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: `
        <md-toolbar color="primary">{{title}}
        </md-toolbar>
        <nav md-tab-nav-bar>
            <a md-tab-link routerLink="/dashboard" routerLinkActive #rla1="routerLinkActive" [active]="rla1.isActive">Dashboard</a>
            <a md-tab-link routerLink="/heroes"  routerLinkActive #rla2="routerLinkActive" [active]="rla2.isActive">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions
    ) {
         this.store.dispatch(this.heroActions.loadHeroes());
    }
}