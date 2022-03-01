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
import Logo from './hedgenet.svg';
import Profile from './profile.svg';


function Header() {

  const [{ user }, dispatch] = useStateValue();

  return (

  <div className="header">
      <div className="header__left">

        <img src = {Logo} width = {100}/>
      
        <div className="header__option
          header__option--active">
              <Link to='/'
              className='links'>

              <div className='newsfeed__header'>
                <h3>Newsfeed</h3>
              </div>

              </Link>
        </div>



        <div className="header__option">
              <Link to='/Funds'
              className='links'>
              
              <div className = 'fund__header'>
                <h3>Funds</h3>
              </div>

              </Link>
        </div>


        <div className="header__option">
              <Link to='/Friends'
              className='links'>
              <div className='search__header'>
                <h3>Search</h3>
              </div>

              </Link>
        </div>


      </div>

      <div className="header__right">

          <IconButton>
              <img src = {Profile} />
          </IconButton>

      </div>
  </div>
 
  );
};

export default Header;
