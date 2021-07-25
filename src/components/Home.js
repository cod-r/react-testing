import React from 'react';

export default function Home(props) {
    return (
        <div className="text-center align-center">
            <Greeting username={props.username}/>
        </div>
    );
};

export function Greeting(props) {
    return <h3 id="greeting"><strong>Welcome </strong>{props.username}</h3>
}