import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PostIndex from '../PostIndex'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={PostIndex} />
      </div>
    </Router>
  )
}

export default App