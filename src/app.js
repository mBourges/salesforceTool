import React from 'react';
import ReactDOM from 'react-dom';
import jsforce from 'jsforce';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			conn: new jsforce.Connection(),
			accounts: []
		}
	}

	componentDidMount() {
		this.state.conn.login('m.bourges@gmail.com', 'NUR4nQAt9dPOjyRJiM2njyVtDFwnyiO8', (err, res) => {
			if (err) { return console.error(err); }
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

		this.state.conn.describeGlobal(function(err, res) {
  if (err) { return console.error(err); }
  console.log('Num of SObjects : ', res.sobjects.length);
  console.log('res : ', res);
  // ...
});
	}

	render() {
		const accounts = this.state.accounts.map((account, index) => (<li key={index}>{ account.Name }</li>));

		return (<div>
			<button type="button" onClick={ this.handleClick.bind(this) }>Get Accounts</button>
			<ul>
				{ accounts }
			</ul>
		</div>)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

