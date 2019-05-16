import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'toastr/build/toastr.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
//import 'toastr/build/toastr.css'

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
