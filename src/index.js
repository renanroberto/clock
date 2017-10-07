import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Clock from './clock'

function App () {
  return (
    <div className="center">
      <Clock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
