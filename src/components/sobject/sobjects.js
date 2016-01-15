import React from 'react';
import Immutable from 'immutable';

import { AppBar, LeftNav, MenuItem } from 'material-ui';

import SobjectList from './sobjectList';

class Sobjects extends React.Component { 
	constructor(props){
		super(props);

		this.state = {
			showStandard: false,
			searchSobjectText: ''
		};
	}

	handleToggleStandard(event) {
		this.setState({
			showStandard: !this.state.showStandard
		});
	}

	handleSearchSobjectText(event) {
		this.setState({
			searchSobjectText: event.target.value
		})
	}

	render() {
		const sobjectList = this.props.sobjectList.filter(sobject => sobject.get('custom') || this.state.showStandard).filter(sobject => (sobject.get('name').indexOf(this.state.searchSobjectText) > -1 || sobject.get('label').indexOf(this.state.searchSobjectText) > -1 ) );
console.log('list', this.props.sobjectList, sobjectList)
const styles = {
'zIndex': 1100
}
		return(<div>

<LeftNav open={this.state.open} docked={true} open={true}  style={ styles }>
          <AppBar title="AppBar"/>
          <input type="text" onChange={ this.handleSearchSobjectText.bind(this) } placeholder="Search" />
			<a href="#" onClick={ this.handleToggleStandard.bind(this) }>show Standard</a>
			<SobjectList sobjects={ sobjectList } />
        </LeftNav>
			
		</div>);
	}
}



export default Sobjects;