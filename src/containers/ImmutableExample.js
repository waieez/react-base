import React, {Component} from 'react'
import {connect} from 'react-redux'
import {immutableActionCreator, IMMUTABLE_EXAMPLE} from '../actions/immutableExample'

class ImmutableExample extends Component {
  handleClick (data) {
    this.props.dispatch(immutableActionCreator(data))
  }
  render () {
    return (
      <div>
        <button onClick={() => this.handleClick(IMMUTABLE_EXAMPLE) }>IMMUTABLE</button>
      </div>
    )
  }
}

export default connect()(ImmutableExample)
