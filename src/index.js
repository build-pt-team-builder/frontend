//REACT
import React from 'react'
import ReactDOM from 'react-dom'
//REDUX
//LOCAL
import './reset.css'
//DELETE?
import * as serviceWorker from './serviceWorker'

const root = document.getElementById('root')
ReactDOM.render(<h1>Nope</h1>, root)

//DELETE?
serviceWorker.unregister();
