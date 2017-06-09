import reducer, * as fromHero from './hero.reducer';
import {HeroActions} from '../actions/hero.actions';

describe('Hero Reducer', () => {
  let actions: HeroActions;
  let state: fromHero.HeroState;

  beforeEach(() => {
    actions = new HeroActions();
    state = {
      id: 1,
      name: 'Test',
      primaryattribute : '',
    appearances: [],
    comments: ''
    };
  });

  it('uses an initial state when none is given', () => {
    let result = reducer(undefined, {type: 'SOME ACTION'});
    expect(result.id).toBe(0);
    expect(result.name).toBe('');
  });
});