
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './components/Main'
import Pokemon from './components/Pokemon'
import Github from './components/Github'

window.onload = () => {
  render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      <Route path='pokemon' component={Pokemon} />
      <Route path='github' component={Github} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
}