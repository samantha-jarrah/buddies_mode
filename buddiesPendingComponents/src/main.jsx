import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BuddiesPendingTable from './components/BuddiesPendingTable.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BuddiesMode from './components/BuddiesMode.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BuddiesMode />
  </React.StrictMode>,
)
