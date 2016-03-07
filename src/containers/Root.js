import React, {Component} from 'react'
import {connect} from 'react-redux'
import Example from '../containers/Example'

export default class Root extends Component {
  render () {
    return (
      <div>
        <Example></Example>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return state
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Root)
// Since we aren't mapping anything, this has the same behavior
// export default connect()(Root)
