import React from 'react';
import {useLocation} from "react-router-dom";

export default function Home() {
    const location = useLocation();
    return (
        <div className="text-center align-center">
            <Greeting username={location.state.username}/>
        </div>
    );
};

export function Greeting(props) {
    return <h3 id="greeting"><strong> Welcome </strong> {props.username}</h3>
}