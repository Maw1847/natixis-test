import React from 'react';
import gif from './image.gif';
import './css.css';

const Loading = () => {
    return (
        <div>
            <img src={gif} alt="" height="100" />
        </div>
    );
};

export default Loading;