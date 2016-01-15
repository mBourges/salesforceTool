import React from 'react';
import ReactDOM from 'react-dom';
import jsforce from 'jsforce';
import Immutable from 'immutable';

import { AppBar } from 'material-ui';

import Sobjects from './components/sobject/sobjects'

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
			  console.log('Num of SObjects : ', res.sobjects.length);
			  
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
		const styles = {
'zIndex': 1101
}
		// const accounts = this.state.accounts.map((account, index) => (<li key={index}>{ account.Name }</li>));
		return (<div>
			<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" style={ styles }/>
			<Sobjects sobjectList={ this.state.sobjects } />
		</div>);
		/*return (<div>
			<button type="button" onClick={ this.handleClick.bind(this) }>Get Accounts</button>
			<ul>
				{ accounts }
			</ul>
		</div>)*/
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

/*<MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
*/
