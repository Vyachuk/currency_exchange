import React from 'react';
import './MyButton.css'

const MyButton = ({click}) => {
    
    return (
        <div className="btn" onClick={click}>→<br/>←</div>
    );
};

export default MyButton;