import "./NavbarStyle.css"
import React, {Component} from 'react';
import {Menuitems} from '../componentes/Menuitems'
import { Link } from "react-router-dom";

class Navbar extends Component{

    state = {clicked : false};
    handelClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-Logo">Trippy</h1>
                     
                <div className="menu-icons" onClick={this.handelClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
    
                <ul className={this.state.clicked ? "nav-Menu active" : "nav-Menu"}>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.icon}{item.titel}
                                </Link>
                            </li>
                        );
                    })}

                    <button>Sign Up</button>
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar