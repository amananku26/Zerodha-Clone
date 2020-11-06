import React from "react"
import {Link,Route} from 'react-router-dom'
import styles from './Products.module.css'
const Technology = () => {
    return(
        <>
        <h5>Sleek, modern, and intuitive trading platforms</h5>
        <div><img src="/images/play.jpg" alt="logo1"/></div>
        </>
    )
}
const Investment = () => {
    return(
        <>
        <h5>Everything from equities and derivatives to mutual funds and fixed income</h5>
        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>       
<div><img src="/images/play.jpg" alt="logo1"/></div>

        </>
    )
}


const Products = () => {

    return(
        <>
        <div style={{display:"felx" , marginTop:"55px"}}>  <Link className={styles.LinkTechnology} to="/product/technology">Technology - </Link > <Link className={styles.LinkInvestment} to="/product/investment">Investment</Link></div>
        <Route path="/product/technology" render ={()=> <Technology />} />
        <Route path="/product/investment" render ={()=> <Investment />} />
        <div style={{marginTop:"155px"}}><img src="/images/direct.jpg" alt="logo1"/></div>
        </>
    )
}

export default Products