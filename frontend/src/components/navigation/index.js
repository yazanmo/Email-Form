import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

require("dotenv").config();
const Navigation = () => {
  
  let token = localStorage.getItem("token");
  
  return (
    <div className="navBar">
      <div className="logo">
      </div>
      <div className="nav">
        <ul>
          {token ? (
            <>
              
                <>
                  <li>
                    {" "}
                    <Link to="/" className="links"  onClick={() => {
                          localStorage.clear();
                        }}>
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/login" className="links">
                  Log in
                </Link>{" "}
              </li>
            </>
          )}
          
          
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
