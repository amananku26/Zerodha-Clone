import React from 'react'
import About from "./NavComponents/About/About"
import Pricing from "./NavComponents/Pricing/Pricing"
import Support from "./NavComponents/Support/Support"
import Products from "./NavComponents/Products/Products"
import { Route } from 'react-router-dom'

const Routing = () => {
    return (
        <>
            <div>
             <Route path = "/about" render = {() => <About />} />
             <Route path = "/product" render = {() => <Products/>} />
             <Route path = "/pricing" render = {() => <Pricing />} />
             <Route path = "/support" render = {() => <Support />} />

            </div>
        </>
    )
}

export default Routing