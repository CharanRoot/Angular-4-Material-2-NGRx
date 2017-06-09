import {Action} from '@ngrx/store';

import {Hero} from 'app/shared/hero';
import {HeroActions} from '../actions/hero.actions';

export type HeroState = Hero;

const initialState: HeroState = {
    id: 0,
    name: '',
    primaryattribute : '',
    appearances: [],
    comments: ''
};

export default function (state = initialState, action: Action): HeroState {
    switch (action.type) {
        case HeroActions.RESET_BLANK_HERO: {
            return initialState;
        }
        case HeroActions.GET_HERO_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}