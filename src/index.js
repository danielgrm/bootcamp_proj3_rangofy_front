import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routes'
import GlobalStyle from './assets/styles/globalStyle'
import 'sweetalert2/src/sweetalert2'





ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <Router/>
  </React.Fragment>,
  document.getElementById('root')
)


