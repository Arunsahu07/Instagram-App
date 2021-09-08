import { useState } from "react";

import instaLogo from "../Assets/735145cfe0a4.png";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  const [state, setState] = useState("");
  const [val, setVal] = useState("");
  return (<>
    <nav className= "navbar">
      <div className="container flex flex-justify-between ">
        <img src={instaLogo} alt="" />
       
        <input className="navbar-input" placeholder="search" value={val}  onChange={(e)=>setVal(e.target.value)}></input>
        <div className=" icons" >
        
            <span className="nav-item">
              <i
                className={
                  state === "home"
                    ? "bi bi-house-door-fill  "
                    : "bi bi-house-door"
                }
                onClick={() => {
                  setState("home");
                }}
              ></i>
            </span>
            <span className="nav-item">
              <i
                className={
                  state === "msg"
                    ? "bi bi-chat-right-fill  "
                    : "bi bi-chat-right"
                }
                onClick={() => {
                  setState("msg");
                }}
              ></i>
            </span>

            <span  className="nav-item">
              <i
                className={
                  state === "disc" ? "bi bi-disc-fill  " : "bi bi-disc"
                }
                onClick={() => {
                  setState("disc");
                }}
              ></i>
            </span>

            <span className="nav-item">
              <i
                className={
                  state === "heart" ? "bi bi-heart-fill  " : "bi bi-heart"
                }
                onClick={() => {
                  setState("heart");
                }}
              ></i>
            </span>
            
          
        </div>

        
      </div>
    </nav>
    </>
  );
};
export default Navbar;
