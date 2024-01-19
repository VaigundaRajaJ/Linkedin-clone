import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from './images/linkedin.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {

  

  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>

        <div className="header_left">

          <img src={logo} alt=""/>
          
          <div className="header_search">
            <SearchIcon />
            <input placeholder='Search' type='text'/>
          </div>

        </div>

        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={SupervisorAccountIcon} title='My network' />
          <HeaderOption Icon={BusinessCenter} title='Jobs' />
          <HeaderOption Icon={ChatIcon} title='Messaging' />
          <HeaderOption Icon={NotificationsIcon} title='Notifications' />
          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp}/>
        </div>

    </div>
  )
}

export default Header