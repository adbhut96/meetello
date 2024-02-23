import React from "react";
import { Link } from "react-router-dom";

import styles from './Navigation.module.css';

const Navigation = ()=>{

    const NavStyleProps = {
        color:'#ffffff',
            textDecoration:'none',
            fontWeight:'bold',
            fontSize:'30px',
            display:  'flex',
            alignItems:'center'
    }

    return(
            <nav className={` ${styles.navbar} container`}>
                    <Link style={NavStyleProps} to="/">
                            <span>Meetello</span>
                    </Link>

            </nav>);
}

export default Navigation;