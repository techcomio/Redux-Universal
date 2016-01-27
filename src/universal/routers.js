import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'universal/containers/App'
import Home from 'universal/containers/Home'
import User from 'universal/containers/User'
import NotFound from 'universal/containers/NotFound'


export default () => (
	<Route path="/" component={App} >
		<IndexRoute component={Home} />
		<Route name="user" path="user/:name" component={User} />
		<Route name="NotFound" path="*" component={NotFound} />
	</Route>
)
