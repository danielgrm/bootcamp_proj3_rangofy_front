import React from 'react'
import { Route } from 'react-router-dom'

import Layout from '../../components/layout/admin'
import Dash from './dash'
import Restaurantes from './restaurantes'



export default (props) => {
    return(
        <Layout>
            <Route exact basename={props.match.path} path={props.match.path + '/'} component={Dash}/>
            <Route exact basename={props.match.path} path={props.match.path + '/restaurantes'} component={Restaurantes}/>      
            
        </Layout>
    )
}