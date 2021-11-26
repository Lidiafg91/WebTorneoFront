import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./menu.css";


function Menu () {
      
      return (
        <>
        <div><Link to="/Noticias"><button className="btnMenu">NOTICIAS</button></Link></div>
        <div><Link to="/Equipos"><button className="btnMenu">EQUIPOS</button></Link></div>
        <div><Link to="/Perfil"><button className="btnMenu">PERFIL</button></Link></div>
        <div><Link to="/Calendario"><button className="btnMenu">CALENDARIO</button></Link></div>
        <div><Link to="/Noticias"><button className="btnNoticiasResponsiveMovil"></button></Link></div>
        <div><Link to="/Equipos"><button className="btnNoticiasResponsiveMovil"></button></Link></div>
        <div><Link to="/Perfil"><button className="btnNoticiasResponsiveMovil"></button></Link></div>
        <div><Link to="/Calendario"><button className="btnNoticiasResponsiveMovil"></button></Link></div>
       <div className="imgIzq"></div>
       <div className="imgIzqResponsiveMovil"></div>   
        </>
      );
}
  export default Menu;