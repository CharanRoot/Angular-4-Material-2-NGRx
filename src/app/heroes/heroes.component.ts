import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';


import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';
import { AddHeroComponent } from '../add-hero/add-hero.component';
import {AppState} from '../state/app-state';
import {HeroActions} from '../state/actions/hero.actions';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Observable<Hero[]>;
    selectedHero: Hero;
    constructor(
        public dialog: MdDialog,
        private router: Router,
        private heroService: HeroService,
        private heroActions: HeroActions,
        private store: Store<AppState>) { }

    getHeroes(): void {
       // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroes = this.store.select('heroes');
        console.log(this.heroes );
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(): void {
     let dialogRef = this.dialog.open(AddHeroComponent);
    dialogRef.afterClosed().subscribe(newHero => {
        // if(newHero){
        //  this.heroService.createHero(newHero)
        //     .then(hero => {
        //         this.heroes.push(hero);
        //         this.selectedHero = null;
        //     });
        // }
        if(newHero){
         this.store.dispatch(this.heroActions.addHero(newHero));
        }

      });  

    }
    delete(hero: Hero): void {
        // this.heroService
        //     .delete(hero.id)
        //     .then(() => {
        //         this.heroes = this.heroes.filter(h => h !== hero);
        //         if (this.selectedHero === hero) { this.selectedHero = null; }
        //     });
        this.store.dispatch(this.heroActions.deleteHero(hero));

    }

}
