import React from 'react';

function Card(props) {
    return (
        <div style={{padding: "16px", border: "1px solid silver", margin: "8px 0", borderRadius: "8px"}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;