import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RenderPage } from './photoViewer/renderPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<RenderPage />
				</Route>
				<Route exact path="/images/:id" >
					<RenderPage />
				</Route>
				<Route path="/">
					<div>
						<h1>Error: 404</h1>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
