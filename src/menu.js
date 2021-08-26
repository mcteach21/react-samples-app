import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { NavLink as Link} from 'react-router-dom';
import styled from "styled-components";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const NavLink = styled(Link)`
      color: #fff;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 1rem;
      height: 100%;
      font-weight: bold;
      cursor: pointer;

      &.active {
        color: #1bde63;
      }

      &:hover {
        color: orangered;
      }
    `;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                    style={{ float: 'left',  fontWeight: 'bold'}}>
                Games
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <NavLink to='/tictoe' style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={handleClose}>TicToe</MenuItem>
                </NavLink>
                <NavLink to='/memory' style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={handleClose}>Memory</MenuItem>
                </NavLink>
            </Menu>
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/about"
                style={{ padding: '6px 8px'}}
            >
                About
            </NavLink>
        </div>
    );
}
