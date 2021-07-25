import React from 'react';
import {useLocation} from "react-router-dom";

export default function Home() {
    const location = useLocation();
    return (
        <div className="text-center align-center">
            <h3 id="greeting"><strong> Welcome </strong> {location.state.username}</h3>
        </div>
    );
};