import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';



function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">

      <SidebarRow src={user.photoURL} title={user.displayName} />

      <Link to='/Funds'
      className='side__links'>
      <SidebarRow Icon={DonutLargeIcon} title="Funds" />
      </Link>

      <Link to='/'
      className='side__links'>
      <SidebarRow Icon={EmojiFlagsIcon} title='Newsfeed'/>
      </Link>

      <Link to='/Friends'
      className='side__links'>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      </Link>

      <SidebarRow Icon={ChatIcon} title="Messages"/>
      
      
      
  </div>
  );
}

export default Sidebar;
