import React, {useState} from "react";
 

function BuddiesModeSearch({updateDisplayedBuddies, searchParam, searchState}) {

    const [searchBoxContents, setSearchBoxContents] = useState(searchParam);
    const [searchScope, setSearchScope] = useState(searchState);

    function handleSearchBoxChange(event) {
        const value = event.target.value;
        setSearchBoxContents(event.target.value);
        updateDisplayedBuddies(value, searchScope);
    }

    // function handleOptionChange(event) {
    //     const value = event.target.value;
    //     setSearchScope(value);
    //     setSearchBoxContents('');
    //     updateDisplayedBuddies('', value);
    //     };


    return (
      <>
        <div className="container d-flex justify-content-center align-items-center">
            <label className="form-label" htmlFor="searchBox">Search:&nbsp;</label>
            <div className="w-50">
            <input  className="form-control" 
                    id="searchBox"
                    aria-label="Search for Buddies" 
                    type="search" 
                    value={searchBoxContents}
                    onChange={handleSearchBoxChange}
                    />
            </div>
        </div>
        {/* <div className="radio-centered">
            <div className="form-check form-check-inline">
                <input className="form-check-input" 
                    type="radio" 
                    id="buddiesName" 
                    aria-label="Buddies Radio Button" 
                    value="Name" 
                    checked={searchScope === "Name"} 
                    onChange={handleOptionChange}
                    />
                <label className="form-check-label" htmlFor="buddiesName">Name</label>
        </div>
        </div> */}
      </> 
    );
    };

export default BuddiesModeSearch;
