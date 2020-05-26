import React from 'react';
import './index.css';
import Player from 'core/assets/img/player.png'

const FootBar = () => 
    <div className="content">
        <div className="player-shadow" />
        <div className="footbar">
            <div className="player">
                <img src={Player} />
            </div>
        </div>
    </div>
export default FootBar;
