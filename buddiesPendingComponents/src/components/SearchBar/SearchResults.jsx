import React from "react";

import "./Results.css";


export const SearchResults = ({result}) => {
    return (
        <div className="search-result" 
        onClick={(e) => alert('${result.name}')}>
        {result.name}
        </div>
    );
};

//export default SearchResults;