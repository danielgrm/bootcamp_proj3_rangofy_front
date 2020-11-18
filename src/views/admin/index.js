import React from 'react'
import { Route } from 'react-router-dom'

import Layout from '../../components/layout/admin'
import Dash from './dash'
import Restaurantes from './restaurantes'
import Usuarios from './user'
import Perfil from './restaurantes/perfil'




export default (props) => {
    return(
        <Layout>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Dash}/>
            <Route exact basename={props.match.path} path={props.match.path + '/restaurantes'} component={Restaurantes}/>            
            <Route exact basename={props.match.path} path={props.match.path + '/restaurantes/:_id'} component={Perfil}/>
            <Route exact basename={props.match.path} path={props.match.path + '/usuarios'} component={Usuarios}/>       
            
        </Layout>
    )
}