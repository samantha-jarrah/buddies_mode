import React, {useState} from "react";

import {FaSearch} from "react-icons/fa";

import "./search.css";

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")

    //this is where the API call should go 
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results  = json.filter((user) => {
                return (
                    value &&
                    user &&  //will be the buddy
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });

    };

    const changeData = (value) => {
        setInput(value);
        fetchData(value);

    };
    return (
    <div className="input-search">
        <FaSearch id="search-icon"/>
        <input placeholder="Find a Buddy" 
        value={input}
        onChange={(e) => changeData(e.target.value)}
        />
    </div>
    );
};

export default buddiesModeSearch;