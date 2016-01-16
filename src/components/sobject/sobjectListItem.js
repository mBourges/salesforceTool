import React from 'react';
import ClassNames from 'classnames';

import { MenuItem } from 'material-ui';

const SobjectsListItem = ({ sobject, onClick }) => {
	const styleClass = ClassNames({
		'custom-sobject': sobject.get('iscustom'),
		'standard-sobject': !sobject.get('iscustom')
	});

	const styles = {
		lineHeight: '1.5em'
	}

	const labelStyles = {
		color: 'lightgrey',
		paddingLeft: '20px'
	}

	const handleClick = () => {
		onClick(sobject);
	}

	return (<MenuItem className={ styleClass } style={ styles } onClick={ handleClick }>
		{ sobject.get('name') }<br />
		<small style={ labelStyles }>{ sobject.get('label') }</small>
	</MenuItem>);
}

export default SobjectsListItem;