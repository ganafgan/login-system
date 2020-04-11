import React from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register'

class App extends React.Component{
	render(){
		return(
			<div>
				<Route exact path='/'>
					<Home/>
				</Route>

				<Route path='/login'>
					<Login/>
				</Route>

				<Route path='/register'>
					<Register/>
				</Route>
			</div>
		)
	}
}

export default App