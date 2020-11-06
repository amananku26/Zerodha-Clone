import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

var links = [{ to: "/about", title: "About" },
{ to: "/product", title: "Products" },
{ to: "/pricing", title: "Pricing" },
{ to: "/support", title: "Support" },]

const NavBar = () => {
    return (
        <div className={styles.NavParentDiv}>
            <div>
                <img className={styles.ZerodhaImgNav} src="https://zerodha.com/static/images/logo.svg" alt="zerodhaLogo" />
                
                <span className={styles.LinkP}>
                {
                    links.map((item) => {
                        return (
                            <span >
                                <Link className={styles.LinkNav} to={item.to}>{item.title}</Link>

                            </span>
                        )
                    })
                }
                </span>
                <button className={styles.Signup} >Sign Up</button>
                {/* <img className={styles.MenuLogoNav} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/1024px-VisualEditor_-_Icon_-_Menu.svg.png" alt="menuLogo"/> */}
            </div>
        </div>
    )
}

export default NavBar