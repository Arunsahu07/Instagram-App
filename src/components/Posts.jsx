import React from 'react'
import { Post } from './Post';
import { useRef } from 'react';

export const Posts = () => {
    const [cur, setCurr] = React.useState(10);


    const story = React.useRef(null);
  React.useEffect(() => {
    console.log(story.current);
    story.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  }, []);
    
    return (
        <div className="post-container"  ref = {story} >
         {   [...Array(cur)].map((_,idx)=>
            <Post index={idx} />
            )}
           <div  style={{display:"flex",justifyContent:'center'}}> <button className="more-btn" onClick={()=>{
                setCurr(cur+7);
                
                
                story.current.scrollBy({
                    top: 0,
                    left: 300,
                    behavior: "smooth",
                  });


           
            }}  >view more</button></div>
        </div>
    )
}
