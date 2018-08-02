import React, { Component} from 'react';
import githubLogo from '../static/images/github.svg';

import '../static/style/Header.css';

class Header extends Component {
    render() {
        return (
            <div className = "header" >
                <img className = "githubLogo" src = { githubLogo}  alt = "" / >
                < h2 className = "headline" > VEDANTU ASSIGNMENT < /h2>
            < /div>
        );
    }
}

export default Header;
