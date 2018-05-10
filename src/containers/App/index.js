import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostNew from '../PostNew'

import PostIndex from '../PostIndex'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/post/new" component={PostNew} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </Router>
  )
}

export default App