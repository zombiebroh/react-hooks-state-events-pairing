import React from 'react';
import Comment from './Comment'

function List ({data}){
   return (
   <div>
        <h3>{data.comments.length} Comments</h3>
        <br/>
        {data.comments.map((comment) => {
            return (
                <Comment
                    key={comment.id}
                    name={comment.user}
                    comment={comment.comment}
                />
            );
        })}
    </div>
    
    );
}

export default List;