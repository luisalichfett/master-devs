import React from 'react';
import Background from 'core/components/Background';
import FootBar from 'core/components/FootBar';
import './index.css'
import TopBar from 'core/components/TopBar';

const Game = () => (
    <div>
        <Background opacity="opacity"/>
        <FootBar />
        <TopBar />
    </div>
);

export default Game;