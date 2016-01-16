import React from 'react';
import SobjectListItem from './sobjectListItem';

import { MenuItem } from 'material-ui';

const SobjectsList = ({ sobjects, onClick }) => {
	const listItem = sobjects.map((sobject, index) => {
		return (<SobjectListItem key={ index } sobject={ sobject } onClick={ onClick } />);
	});

	return (<div>{ listItem }</div>);
}

export default SobjectsList;