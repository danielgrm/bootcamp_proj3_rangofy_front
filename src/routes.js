import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Portal from './views/portal'
import  Dash  from './views/admin/dash'
import history from './config/history'


const Routers = () => (
    <Router history ={history}>
        <Switch>
            
            <Route path="/admin"component={Dash} /> 
            <Route path="/" component={Portal} />
            
        </Switch>
    </Router>


)

export default Routers