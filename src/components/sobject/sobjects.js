import React from 'react';
import Immutable from 'immutable';

import { AppBar, LeftNav, MenuItem, TextField, FlatButton } from 'material-ui';

import SobjectList from './sobjectList';
import SobjectDetails from './sobjectDetails'

class Sobjects extends React.Component { 
	constructor(props){
		super(props);

		this.state = {
			showStandard: false,
			searchSobjectText: '',
			selectedSobject: Immutable.Map({})
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

	handleClick(sobject) {
		console.log('sobject', sobject);
		this.setState({
			selectedSobject: sobject
		})
	}

	render() {
		const sobjectList = this.props.sobjectList.filter(sobject => sobject.get('custom') || this.state.showStandard).filter(sobject => (sobject.get('name').toLowerCase().indexOf(this.state.searchSobjectText.toLowerCase()) > -1 || sobject.get('label').toLowerCase().indexOf(this.state.searchSobjectText.toLowerCase()) > -1 ) );

const styles = {
'zIndex': 1100,
width: '30%'
}
		return(<div>

<LeftNav className="left-nav" open={this.state.open} docked={true} open={true}  style={ styles }>
          <AppBar title="AppBar"/>
           <TextField
	type="text"
  hintText=""
  floatingLabelText="Search"
  onChange={ this.handleSearchSobjectText.bind(this) } />
  <FlatButton label={ this.state.showStandard ? 'Hide Standard' : 'Show Standard'} secondary={true} onClick={ this.handleToggleStandard.bind(this) } />
			<SobjectList sobjects={ sobjectList } onClick={ this.handleClick.bind(this) } />
        </LeftNav>
        <div className="content-block">
			<SobjectDetails sobject={ this.state.selectedSobject} />
		</div>
		</div>);
	}
}





export default Sobjects;