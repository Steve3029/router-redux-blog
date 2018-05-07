import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PostIndex from '../PostIndex'

const App = () => {
  return (
    <Router>
      <Route path="/" component={PostIndex} />
    </Router>
  )
}

export default App