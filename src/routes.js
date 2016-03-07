import React from 'react'
import {Route} from "react-router"

// CONTAINERS/COMPONENTS
import Example from "./containers/Example"
import ImmutableExample from "./components/ImmutableExample"

export default (
  <Route path="/" component={Example}>
    <Route path="immutable" component={ImmutableExample} />
  </Route>
)
