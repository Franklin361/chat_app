import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es';
import dayjs from 'dayjs';

dayjs.extend(relativeTime)
dayjs.locale('es');


import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
)
