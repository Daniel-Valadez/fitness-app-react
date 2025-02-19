import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  
  //This will be connected to a logout button for users. 
  //const logOut = navigate("/login"); 

	return (
		<header>
			<div className="pageHeader">
				<FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
				<h1>Fitness Application</h1>
			</div>

			<nav>
        <Link to="/" className="headerLink">Home</Link> 
        <Link to="/" className="headerLink">Create</Link> 
        <Link to="/" className="headerLink">Blog</Link> 
        <Link to="/" className="headerLink">Settings</Link> 
      </nav>
		</header>
	);
};

export default NavBar;
