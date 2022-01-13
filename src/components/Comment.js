import React from 'react';

function Comment ({name, comment}){
    return (
        <ul>
            <h3>{name}</h3>
            <span>{comment}</span>

        </ul>
    );
}

export default Comment;