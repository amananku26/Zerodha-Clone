import React from "react"
import styles from "./About.module.css"

const About = () => {

    return(
        <>
        <img src="/images/no1.jpg" alt="logo"/>
        <div><div  className={styles.investText}>Invest in everything</div ></div>
        <div style={{fontSize:"20px"}}>Online platform to invest in stocks, derivatives, mutual funds, and more</div>
        <button className={styles.Signup} >Sign Up</button>
        </>
    )
}

export default About