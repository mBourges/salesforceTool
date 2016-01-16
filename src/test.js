import React from 'react'
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import NavigationIcon from 'material-ui/lib/svg-icons/navigation/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const AppBarExampleIconMenu = () => {
  const styles = {
'zIndex': 1101
}

  return (<AppBar
    title="Salesforce Tools"
    style={ styles }
    iconElementLeft={
      <IconMenu
        iconButtonElement={
          <IconButton><NavigationIcon /></IconButton>
        }
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    } />)
};

export default AppBarExampleIconMenu;