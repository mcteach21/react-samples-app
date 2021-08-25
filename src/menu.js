import React, { Component } from 'react'
import { Input, Menu00 } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class MainMenu extends Component {
  state = { activeItem: 'home' }

  constructor(props){
    super(props);

    //const [anchorEl, setAnchorEl] = React.useState(null);
  } 
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  //    

  handleClick(event){
    //setAnchorEl(event.currentTarget);
  }

  handleMenuClick(event){
    //alert(event.currentTarget.name);
    //setAnchorEl(null);
  }

 handleItemClick(e, name){
    //this.setState({ activeItem: name })
    alert(name);
  }

  render() {
    
    const { activeItem } = this.state;


   

    /*
     <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClick}
                >
                  <MenuItem 
                      onClick={handleMenuClick}>
                      TicToe
                  </MenuItem>
                  <MenuItem onClick={handleMenuClick}>Memory</MenuItem>

                  <MenuItem 
                      onClick={ () => handleClic() }>  <AccountCircleIcon /> Menu X 
                  </MenuItem>

                  <MenuItem as={Link} to='/home'>
                    <HomeRoundedIcon /> Home
                  </MenuItem>
                </Menu>
    */

    return (
      <Menu primary  
                  id="simple-menu"

                  onClose={this.handleMenuClick}>
        <MenuItem
          as={NavLink} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/about"
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/profile"
          name='my profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}