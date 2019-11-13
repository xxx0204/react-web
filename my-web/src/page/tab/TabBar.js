import React from 'react'
import hot from 'react-hot-loader/root'
import { HashRouter as Router } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import Login from '../login/Login'
import Home from '../home/App'
 
function TabBar(){
    return (
        <Router>
            <CacheSwitch>
                <CacheRoute exact path="/login" component={Login} />
                <CacheRoute exact path="/home" component={Home} />
                <CacheRoute render={Login} />
            </CacheSwitch>
        </Router>
    )
}
 
export default TabBar