import React from 'react';
import './index.css';
import Bug from 'core/assets/img/bug.png'

const TopBar = () => 
    <div className="topbar">
        <div className="bug">
            <img src={Bug} />
        </div>
    </div>;

export default TopBar;
