// import { useState } from "react";
// import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import UserService from '../services/UserService';


export default function Login() {
  const [currUsername, setUsername] = useState("");
  const [newUser, setNewUser] = useState({});

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])

  useEffect(() => {
    setNewUser({username: currUsername});
  }, [currUsername]);

  const handleChange = (username) => {
    setUsername(username.target.value);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/profile"; 
    navigate(path, {
      state: newUser
    });
  }

  const handleSubmit = () => {
    // console.log(newUser)
    try {
      UserService.addUser(newUser);
      routeChange()
    } catch (error) {
      console.log("Something went wrong")
      routeChange()
    }
  }
  

  return (
    <div class="bucket">
      <h1 class="header">Stock Tracker</h1>
      <div class = "filler"></div>
      <div class="container">
        <div>
          <input type="text" id="input" class="Input-text" onChange={handleChange} placeholder="Username" />
          <button class="button-38" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}