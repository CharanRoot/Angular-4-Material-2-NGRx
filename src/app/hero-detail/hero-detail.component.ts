import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';
import { AppState } from '../state/app-state';
import { HeroActions } from '../state/actions/hero.actions';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
         private store: Store<AppState>,
        private heroActions: HeroActions
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        //this.location.back();
          this.router.navigate(['/'+'heroes']);
    }

    save(): void {
        console.log('updated hero',this.hero);
                    this.store.dispatch(this.heroActions.saveHero(this.hero));
                     this.goBack()
    }
}