import React, {useState} from "react"

function Detail ({hideName, details, handleHideClick}) {
    const [likes, setLikes] = useState(details.upvotes)
    const [dislikes, setDislikes] = useState(details.downvotes)

    function handleLikeClick () {
      let newLike = likes + 1;
      setLikes(newLike)
    }

    //this updates my like count(in Detail comp)
    
    function handleDislikeClick () {
      let newDislike = dislikes + 1;
      setDislikes(newDislike)
    }

    return (   
      <div>   
          <iframe
          width="919"
          height="525"
          src={details.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
          />
          <h1>{details.title}</h1>
          <h5>{details.views} | {details.createdAt} </h5>
          <div>
              <button onClick={handleLikeClick}>{likes}👍</button>
              <button onClick={handleDislikeClick}>{dislikes}👎</button>
          </div>
          <button onClick={handleHideClick}>{hideName}</button>
    
      </div>
    
    );
}

export default Detail;