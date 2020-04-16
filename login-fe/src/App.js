import React from 'react';
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register'

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
			
				<Route  exact path='/'>
					<Login/>
				</Route>

				<Route path='/register'>
					<Register/>
				</Route>
		
			</BrowserRouter>
	)
	}
}

export default App