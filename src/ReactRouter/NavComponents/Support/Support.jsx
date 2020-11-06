import React from "react"
import styles from './Support.module.css'


const SupportPortal = () => {
    return (
        <div className={styles.parentSupport}>
            <div style={{display:"felx"}}>
                <div>Support Portal</div>
                <div>Login with Kite</div>
            </div>


        </div>
    )
}

const Support = () => {

    return (
        <>
            <SupportPortal />
            <div>Support</div>
            <div>page</div>
        </>
    )
}

export default Support