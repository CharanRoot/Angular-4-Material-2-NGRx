import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { AppState } from '../state/app-state';
import { HeroActions } from '../state/actions/hero.actions';


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    recentheroes: Hero[] = [];

    constructor(private heroService: HeroService,
        private store: Store<AppState>,
        private heroActions: HeroActions, ) {
    }

    ngOnInit(): void {

        this.store.select('heroes').subscribe(heroes => {
            let allheroes = heroes as Hero[];
            this.heroes = allheroes.slice(0, 5);
            this.recentheroes = allheroes.slice(5, 10);
        });
    }


}