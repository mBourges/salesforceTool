import React from 'react';
import ClassNames from 'classnames';

import { MenuItem } from 'material-ui';

const SobjectsListItem = ({ sobject }) => {
	const styleClass = ClassNames({
		'custom-sobject': sobject.get('iscustom'),
		'standard-sobject': !sobject.get('iscustom')
	})

	return (<MenuItem className={ styleClass }>
		{ sobject.get('name') } - { sobject.get('label') }
	</MenuItem>);
}

export default SobjectsListItem;