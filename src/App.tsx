import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Profile } from './pages/Profile'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
