import React from 'react'
import {Route} from "react-router"

// CONTAINERS/COMPONENTS
import Example from "./containers/Example"
import ImmutableExample from "./containers/ImmutableExample"

export default (
  <Route path="/" component={Example}>
    <Route path="immutable" component={ImmutableExample} />
  </Route>
)
