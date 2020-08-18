import React from 'react'
import classes from './Navbar.module.scss'
import '../../All.css'
import nav__logo from '../../img/nav__logo.jpg'
import nav_menu from '../../img/nav_menu.svg'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={cn('container flex-ver-center', classes.inner)}>
                <NavLink to="/" className={classes.logo_wrap}>
                    <img src={nav__logo} alt="nav__logo" className={classes.logo}/>
                </NavLink>
                <NavLink to="/catalog" className={cn(classes.link, classes.link_catalog)}>
                    <p className="text-4">В каталог</p>
                    <img src={nav_menu} alt="nav_menu" className={classes.link_catalog_icon}/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar