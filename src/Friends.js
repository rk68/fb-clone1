import React from 'react';
import "./Friends.css";
import { Avatar } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";


function Friends() {
    return (

        <div className='friends'>

            <h1> Network </h1>

            <div className="friends__input">
            <SearchIcon />
            <input placeholder="Search" type="text" />
            </div>

        

            <div className='friend'> 
                <div className='friend__top'>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1' className="post__avatar" />
                    <h3>Username</h3>
                </div>

                <div className='friend__bottom'>
                    <p>Growth Stocks</p>
                </div>
             </div>


             <div className='friend'> 
                <div className='friend__top'>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1' className="post__avatar" />
                    <h3>Username</h3>
                </div>

                <div className='friend__bottom'>
                    <p>Technology, Social Investing</p>
                </div>
             </div>
             
            <div className='friend'> 
                <div className='friend__top'>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1' className="post__avatar" />
                    <h3>Username</h3>
                </div>

                <div className='friend__bottom'>
                    <p>Value Investing</p>
                </div>
             </div>
             
            <div className='friend'> 
                <div className='friend__top'>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1' className="post__avatar" />
                    <h3>Username</h3>
                </div>

                <div className='friend__bottom'>
                    <p>Meme Stocks</p>
                </div>
             </div>



        </div>

    );
};

export default Friends;
        