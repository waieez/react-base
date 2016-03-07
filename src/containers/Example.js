import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleActionCreator} from '../actions/example'

class Example extends Component {
  handleClick (data) {
    this.props.dispatch(exampleActionCreator(data))
  }

  render () {
    const {children} = this.props
    return (
      <div>
        <button onClick={() => this.handleClick("OHYEAH")}>EXAMPLE</button>
        {children}
      </div>
    )
  }
}

export default connect()(Example)
