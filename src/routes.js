import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import {
    Home,
    Dash as AdminDash
} from './views'
import history from './config/history'
import Avaliacoes from './views/portal/avaliacoes'
import Avaliar from './views/portal/avaliar'


const Routers = () => (
    <Router history ={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin"component={AdminDash} /> 
            <Route path="/avaliacoes"component={Avaliacoes}  />
            <Route path="/avaliar"component={Avaliar} /> 
            
        </Switch>
    </Router>


)

export default Routers