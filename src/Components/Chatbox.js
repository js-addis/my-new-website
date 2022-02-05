import './Chatbox.css';
import React from 'react';

export default function Chatbox() {
    return(
        <div className="chatbox-container">
            <svg className="chatbox1" 
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1000 1000">
                    
                    <polygon class="chatbox-path" 
                             points="0 0, 
                                    1000 0, 
                                    1000 875, 
                                    300 875, 
                                    150 1000, 
                                    150 875, 
                                    0 875, 
                                    0 0"/>
            </svg>
        </div>
        
    )
}