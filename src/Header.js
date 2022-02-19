import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import PeopleIcon from "@material-ui/icons/People";
import { Link } from 'react-router-dom';


function Header() {

  const [{ user }, dispatch] = useStateValue();

  return (

  <div className="header">
      <div className="header__left">

        <h2>HedgeNet</h2>

        <div className="header__input">
            <SearchIcon />
            <input placeholder="Search" type="text" />
        </div>

      </div>

      <div className="header__center">

        <div className="header__option
        header__option--active">
            <Link to='/'
            className='links'>
            <HomeIcon fontSize="large" />
            </Link>
        </div>
        

        
        <div className="header__option">
            <Link to='/Funds'
            className='links'>
            <DonutLargeIcon fontSize="large" />   
            </Link>
        </div>
        

        <div className="header__option">
            <Link to='/Friends'
            className='links'>
            <PeopleIcon fontSize="large" />
            </Link>
        </div>


    
    </div>



      <div className="header__right">

          <div className="header__info">
              <Avatar src={user.photoURL} />
              <h4>{user.displayName}</h4>
          </div>

          <IconButton>
              <AddIcon />
          </IconButton>

          
          <IconButton>
              <ForumIcon />
          </IconButton>

          
          <IconButton>
              <NotificationsActiveIcon />
          </IconButton>

          <IconButton>
              <ExpandMoreIcon />
          </IconButton>

      </div>
  </div>
 
  );
};

export default Header;
