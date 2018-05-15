import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostNew from '../PostNew'
import PostShow from '../PostShow'

import PostIndex from '../PostIndex'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/post/new" component={PostNew} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </Router>
  )
}

export default App