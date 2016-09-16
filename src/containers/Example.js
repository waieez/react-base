import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleActionCreator, EXAMPLE} from '../actions/example'

class Example extends Component {
  handleClick (data) {
    this.props.dispatch(exampleActionCreator(data))
  }

  render () {
    const {children} = this.props
    return (
      <div>
        <button onClick={() => this.handleClick(EXAMPLE)}>EXAMPLE</button>
        {children}
      </div>
    )
  }
}

export default connect()(Example)
