import React from 'react';
import "./Funds.css";
import SearchIcon from "@material-ui/icons/Search";



function Funds() {
    return (
        
        
        <div className='funds'>
            <h1> Funds </h1>

            <div className="funds__input">
            <SearchIcon />
            <input placeholder="Search" type="text" />
            </div>

            <div className='fund__box'> 
                <div className='fund__top'>
                    <h3>Fund Name</h3>
                </div>
                <div className='fund__bottom'>
                    <p>Fund Description</p>
                </div>
            </div>

            
            <div className='fund__box'> 
                <div className='fund__top'>
                    <h3>Fund Name</h3>
                </div>
                <div className='fund__bottom'>
                    <p>Fund Description</p>
                </div>
            </div>

            
            <div className='fund__box'> 
                <div className='fund__top'>
                    <h3>Fund Name</h3>
                </div>
                <div className='fund__bottom'>
                    <p>Fund Description</p>
                </div>
            </div>

            <div className='fund__box'> 
                <div className='fund__top'>
                    <h3>Fund Name</h3>
                </div>
                <div className='fund__bottom'>
                    <p>Fund Description</p>
                </div>
            </div>

            <div className='fund__box'> 
                <div className='fund__top'>
                    <h3>Fund Name</h3>
                </div>
                <div className='fund__bottom'>
                    <p>Fund Description</p>
                </div>
            </div>

        </div>
        
    );
};

export default Funds;