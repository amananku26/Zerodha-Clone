import React from "react"
import styles from "./Pricing.module.css"

const Free = (props) => {
    return(
        <>
        <div style={{display:"flex"}}>
         <h2 style={{marginLeft:"175px"}}>Free equity delivery</h2>
         <h2 style={{marginLeft:"125px"}}>Intraday and F&O trades</h2>
         <h2 style={{marginLeft:"145px"}}>Free direct MF</h2>

        </div>
        <div style={{display:"flex"}}>
            <div style={{marginLeft:"155px"}}>
            All equity delivery investments (NSE, BSE), <br/> are absolutely free — ₹ 0 brokerage.
            </div>
            <div style={{marginLeft:"15px"}}>
            Flat Rs. 20 or 0.03% (whichever is lower) <br/> per executed order on intraday trades <br/> across equity, currency, and commodity trades.
            </div>
            <div style={{marginLeft:"5px"}}>
            All direct mutual fund investments are <br/> absolutely free — ₹ 0 commissions & DP charges.
            </div>
        </div>
        </>
    )
}

const Pricing = () => {

    return(
        <>
        <div><div style={{fontSize:"50px",marginTop:"45px"}}>Pricing</div></div>
        <div><div style={{fontSize:"15px",marginTop:"15px"}}>Free equity investments and flat ₹20 intraday and F&O trades</div></div>
        <hr style={{marginTop:"155px"}}/>
        <div style={{marginTop:"1px"}}><img src="/images/zero.jpg" alt="logo1"/></div>
        <div style={{display:"felx"}}>
        <Free head="Free equity delivery"/>
        </div>
        <div>page</div>
        </>
    )
}

export default Pricing