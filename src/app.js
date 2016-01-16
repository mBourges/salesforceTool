
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import AppBarExampleIconMenu from './test'



import React from 'react';
import ReactDOM from 'react-dom';
import jsforce from 'jsforce';
import Immutable from 'immutable';

import { AppBar, IconMenu, IconButton, MenuItem, MoreVertIcon, NavigationClose } from 'material-ui';

import Sobjects from './components/sobject/sobjects'

class Test extends React.Component {
	render() {
		return (<IconButton><NavigationClose /></IconButton>)
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			conn: new jsforce.Connection(),
			accounts: [],
			sobjects: Immutable.List([])
		}
	}

	componentDidMount() {
		this.state.conn.login('m.bourges@gmail.com', 'NUR4nQAt9dPOjyRJiM2njyVtDFwnyiO8', (err, res) => {
			if (err) { return console.error(err); }
			this.state.conn.describeGlobal((err, res) => {
			  if (err) { return console.error(err); }
			  console.log('Num of SObjects : ', res);
			  
			  this.setState({
			  	sobjects: this.state.sobjects.merge(res.sobjects)
			  })
			});
		});
	}

	handleClick(event) {
		event.preventDefault();
		event.stopPropagation();

		this.state.conn.query('SELECT Id, Name FROM Account', (err, res) => {
			if (err) { return console.error(err); }
			console.log('Accounts', res)
			this.setState({
				accounts: res.records
			});
		});

		
	}

	render() {
		console.log('this.state : ', this.state.sobjects);
		
		// const accounts = this.state.accounts.map((account, index) => (<li key={index}>{ account.Name }</li>));
			// <AppBar title="Salesforce Tools" iconClassNameRight="muidocs-icon-navigation-expand-more" style={ styles }/>
		return (<div>
			<AppBarExampleIconMenu />
			<Sobjects sobjectList={ this.state.sobjects } />
		</div>);
		
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

 
