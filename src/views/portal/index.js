import React from 'react'
import { Route } from 'react-router-dom'

import Layout from '../../components/layout'
import Home from './home'
import CreateUser from './create'
import Login from './login'
import Ranking from './ranking'

export default (props) => {
    return(
        <Layout>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Home}/>
            <Route exact basename={props.match.path} path={props.match.path + 'novo-usuario'} component={CreateUser}/>
            <Route exact basename={props.match.path} path={props.match.path + 'login'} component={Login}/>
            <Route exact basename={props.match.path} path={props.match.path + 'ranking'} component={Ranking}/>
        </Layout>
    )
}