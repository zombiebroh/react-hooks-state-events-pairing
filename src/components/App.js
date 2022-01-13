import video from "../data/video.js";
import React, {useState} from 'react'
import Detail from './Detail'
import videoData from '../data/video'
import CommentList from './CommentList'


function App() {
  //data that I'm using for my details component. 
  const [details, setDetails] = useState(videoData)


  //this hides comments
  const [hide, setHide] = useState(false)
  function handleHideClick(){
    setHide((hide) => !hide)
  }

  const isItHidden = hide ? "" : <CommentList data={details}/>;
  const hideName = hide ? "Show Comment" : "Hide Comment";


  return (
    <div className="App">
      <Detail 
        details={details} 
    

        handleHideClick={handleHideClick}

        hideName ={hideName}
      />

       {isItHidden}  

      

     
    </div>
  );
}

export default App;
