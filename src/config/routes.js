import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import GameList from '../pages/GameList';
import NewGame from '../pages/NewGame';
import GameShow from '../pages/GameShow';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/games/new' component={ NewGame } />
    <Route path='/games/:id' component= { GameShow } />
    <Route path='/games' component={ GameList } />
  </Switch>
)