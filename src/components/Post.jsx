import React from "react";

export const Post = ({ index }) => {
  const [value, setValue] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [state, setState] = React.useState("");
  

  return (
    <div key={index} data-aos="fade-up">
      <div className="post-containers ">
        <div className="post-user">
          <span>username</span>
          <span>
            <i className="bi bi-three-dots"></i>
          </span>
        </div>
        <img
          src={`https://picsum.photos/${index + 500}/${index + 590}`}
          alt=""
          className="postImage"
        />
        <div>
          <div className="post-options">
            <span style={{ display: "flex", alignItems: "center" }}>
              <i
                className={
                   state === "heart" ? "bi bi-heart-fill colored" :  "bi bi-heart "
                }
                onClick={() => {
                  if(state === 'heart')
                  setState("");
                  else setState("heart");
                }}
              ></i>
              <i
                className={state === "chat" ? "bi bi-chat-fill" : "bi bi-chat"}
                onClick={() => {
                  if(state==="chat")
                  {setState("");
               }
                  else
                  {setState("chat");}
                 
                }}
              ></i>
              <i
                className={
                  state === "share" ? "bi bi-share-fill" : "bi bi-share"
                }
               
                onClick = {()=>{ if(state==="share")
                {setState("");
             }
                else
                {setState("share");}}}
              ></i>
            </span>
            <span>
              <i
                className={
                  state === "book" ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                }
                onClick={() => {
                  if(state==="book")
                  {setState("");
               }
                  else
                  {setState("book");}}}
              ></i>
            </span>
          </div>
          <div>{state == "heart" ? 235 : 234}</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            quo voluptates ea autem adipisci soluta tempore nam assumenda
            <br />
            <span className="cmt-container">{comment}</span>
          </div>
          <div className={state==="chat" ? "post-nav" : "post-nav none"} >
            <span>
              <i className="bi bi-emoji-smile"></i>
            </span>
            <input className="comment"
              placeholder="add a comment"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            ></input>
            <button
              onClick={() => {
                setComment(value);
                setValue("");
              }}
              style={{ border: "none" }}
            >
              post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
