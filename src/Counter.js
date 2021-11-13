import {useState} from "react";
export function Counter(){
    const [like,setlike]=useState(0);
    const [Dislike,setDislike]=useState(0);
    return(
      <div className="counter-container">
        <button className="likes-dislikes" onClick={()=>setlike(like+1)}>👍{like}</button>
        <button  className="likes-dislikes" onClick={()=>setDislike(Dislike+1)}>👎{Dislike}</button>
         

        {/* <p>{like}</p> */}
      </div>
    );
  }

