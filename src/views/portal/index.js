import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '../../config/auth'
import Layout from '../../components/layout/portal'
import Home from './home'
import CreateUser from './create'
import Login from './login'
import Ranking from './ranking'
import Avaliar from './avaliar'
import Avaliacoes from './avaliacoes'

const UserRoute = ({ ...rest }) => {
    if (!isAuthenticated) {
        return <Redirect to='/logar' />
    }
    return <Route {...rest} />
}

export default (props) => {


    return (
        <Layout>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Home} />
            <Route exact basename={props.match.path} path={props.match.path + 'novo-usuario'} component={CreateUser} />
            <Route exact basename={props.match.path} path={props.match.path + 'logar'} component={Login} />
            <Route exact basename={props.match.path} path={props.match.path + 'ranking'} component={Ranking} />
            <UserRoute exact basename={props.match.path} path={props.match.path + 'avaliar'} component={Avaliar} />
            <UserRoute exact basename={props.match.path} path={props.match.path + 'minhas-avaliacoes'} component={Avaliacoes} />
        </Layout>
    )
}