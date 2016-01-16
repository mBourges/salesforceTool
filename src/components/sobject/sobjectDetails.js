import React from 'react';

import { Toolbar, ToolbarTitle, ToolbarGroup, MenuItem } from 'material-ui';

const SobjectDetails = ({ sobject }) => {
console.log('SobjectDetails', sobject.get('name'))
	return (<div>
		<Toolbar>
    <ToolbarGroup firstChild={true} float="left">
    	<ToolbarTitle text={ sobject.get('label') } />
    </ToolbarGroup>
    </Toolbar>
		<div>Name: { sobject.get('name') }</div>
		<div>Label: { sobject.get('label:') }</div>
		<div>Plural Label: { sobject.get('labelPlural') }</div>
		<div>Key Prefix: { sobject.get('keyPrefix') }</div>
		<div>activateable: { sobject.get('activateable') ? 'true' : 'false' }</div>
		<div>createable: { sobject.get('createable') ? 'true' : 'false' }</div>
		<div>custom: { sobject.get('custom') ? 'true' : 'false' }</div>
		<div>customSetting: { sobject.get('customSetting') ? 'true' : 'false' }</div>
		<div>deletable: { sobject.get('deletable') ? 'true' : 'false' }</div>
		<div>deprecatedAndHidden: { sobject.get('deprecatedAndHidden') ? 'true' : 'false' }</div>
		<div>feedEnabled: { sobject.get('feedEnabled') ? 'true' : 'false' }</div>
		<div>layoutable: { sobject.get('layoutable') ? 'true' : 'false' }</div>
		<div>mergeable: { sobject.get('mergeable') ? 'true' : 'false' }</div>
		<div>queryable: { sobject.get('queryable') ? 'true' : 'false' }</div>
		<div>replicateable: { sobject.get('replicateable') ? 'true' : 'false' }</div>
		<div>retrieveable: { sobject.get('retrieveable') ? 'true' : 'false' }</div>
		<div>searchable: { sobject.get('searchable') ? 'true' : 'false' }</div>
		<div>triggerable: { sobject.get('triggerable') ? 'true' : 'false' }</div>
		<div>undeletable: { sobject.get('undeletable') ? 'true' : 'false' }</div>
		<div>updateable: { sobject.get('updateable') ? 'true' : 'false' }</div>
	</div>);
}

export default SobjectDetails;





