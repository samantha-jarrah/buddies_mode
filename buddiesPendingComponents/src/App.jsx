import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './components/SearchBar/buddiesModeSearch';
import { SearchResultsList } from './components/SearchBar/SearchResultsList';


function App() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);

  return (
    <div className='App'>
      <div className="search-bar">
        <SearchBar setResults ={setResults} />
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}

export default App;


