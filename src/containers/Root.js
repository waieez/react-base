import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {Router} from 'react-router'
import routes from '../routes'

class Root extends Component {
  render () {
    const {store, history} = this.props
    return (
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
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
