import React from 'react';
import logo from '../assets/logo.png';

class NavigationBar extends React.Component{
    render(){
        return(
            <div class="navbar">
                <nav class = "navbar-nav">
                    <img src={logo}></img>
                    <button class="mobile-nav-toggle" aria-controls='primary-nav' aria-expanded='false'></button>
                
                    <ul id='primary-nav' class='primary-nav' data-visible='false'>
                        <li>
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavigationBar