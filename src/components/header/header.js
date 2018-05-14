import React, { Component } from 'react';
import Logo from '../../TheBookGrindLogo.png';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *APP* COMPONENT
export default class Header extends Component {
    render() {
        return (
            <div className="Header_parent">
                <div className="Header_content">

                    {/* Displays site logo and title */}
                    <div className="Header_left">
                        <img className="Logo" src={Logo} alt="Book Logo"/>
                        <h2> The Book Grind </h2>
                    </div>

                    <div className="Header_right">
                        <div className="search"></div>
                        <div className="profile">
                            {/* <img className= */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}