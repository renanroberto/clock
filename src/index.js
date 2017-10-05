import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Clock from './components/clock'

class Main extends React.Component {
  render () {
    return (
      <div className="center">
        <div className="clock">
          <Clock />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
