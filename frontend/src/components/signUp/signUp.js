import React, { useState,useRef} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import "./signUp.css";

export default function Signup() {

        const [name, setName] = useState("");
        const [age, setAge] = useState("");
        const [mobile, setMobile] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [deliveryType, setDeliveryType] = useState("")
        const [show, setShow] = useState(false);
        const target = useRef(null);
        const history = useHistory();

        const signUpButton = (e) => {
            e.preventDefault();
            axios
              .post(`http://localhost:5000/signup`, {
                name,
                age,
                mobile,
                email,
                password,
                deliveryType,
              })
              .then((result) => {
                history.push('/login')
              })
              .catch((err) => {
              });
          };

    return (
      <div className="login-box">
        <div className='form'>
        <h1>Sign up</h1>
        <br></br>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
           <input
            type="number"
            placeholder=" Age "
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
             <input
            type="number"
            placeholder=" Mobile "
            required
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder=" Email "
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder=" Password "
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
      Delivery Type
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
             <div className="radio-button">
          <input
            type="radio"
            value="cash on delivery"
            name="user_role"
            onChange={(e) => {
              setDeliveryType(e.target.value);
            }}
          />
          <label for="html">cash on delivery</label>
          <input
            type="radio"
            value="using credit card"
            name="user_role"
            onChange={(e) => {
              setDeliveryType(e.target.value);
            }}
          />
          <label for="html">using credit card</label>
        </div> 
          </div>
        )}
      </Overlay>
    <div>
<button className="signup" onClick={signUpButton}>signup</button>    
</div>
      
      </div>
        </div>
    )
}
