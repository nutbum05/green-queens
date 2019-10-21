import React from 'react';

const NavBar = () => {
 return (
 <div className="NavBar">
     <ul className="PageLinks">
        <img className="logo" src='../images/logo.jpg'/>
        <a href className="FactsPage">Facts </a> 
        <a href className="Inspiration"> Inspiration </a>
        <a href className="PlantTree"> Plant Tree </a>
        <a className="Login"> Login </a>
     </ul>
 </div>
)
}

export default NavBar;