import React from 'react'
import { Route, Router, Switch, Redirect  } from 'react-router-dom'
import Portal from './views/portal'
import  Dash  from './views/admin/index'
import history from './config/history'
import { isAuthenticated } from './config/auth'
import Login from './views/admin/login'
import { getUser } from './config/auth'

const AdminRoute = ({ ...rest }) => {
    

    if (!isAuthenticated()) {
         return <Redirect to='/login' />
     }

     if (getUser().isadmin === false) {
         return <Redirect to='/'/>
     }
     return <Route  {...rest} />
 } 



const Routers = () => (
    <Router history ={history}>
        <Switch>
            <Route path="/login"component={Login} />            
            <AdminRoute path="/admin"component={Dash} /> 
            <Route path="/" component={Portal} />            
        </Switch>
    </Router>


)

export default Routers