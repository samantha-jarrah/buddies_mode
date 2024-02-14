import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BuddiesPendingTable from './components/BuddiesComponents/BuddiesPendingTable.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BuddiesPage from './pages/BuddiesPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BuddiesPage />
  </React.StrictMode>,
)
