import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString(),
      format: 'AMPM'
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => { this.tick() }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({ date: new Date().toLocaleTimeString() })
  }

  changeFormat () {
    this.state.format === 'AMPM' ?
      this.setState({ format: 'default' }) :
      this.setState({ format: 'AMPM' })
  }

  convert (time, method) {
    if (method !== 'AMPM') {
      let H = parseInt(time.substring(0,2), 10)
      let ampm = time.substring(9)

      if(ampm === 'PM' && H !== 12) H += 12
      if(ampm === 'AM' && H === 12) H = 0

      return (H < 10 ? '0'+H : H) + time.substring(2,8)
    }
    else return time
  }

  render () {
    return (
      <div className="clock" onClick={ e => this.changeFormat(e) }>
        { this.convert(this.state.date, this.state.format) }
      </div>
    )
  }
}
