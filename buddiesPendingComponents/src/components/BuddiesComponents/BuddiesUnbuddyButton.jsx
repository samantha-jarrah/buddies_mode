import React from 'react';

// Delete buddy
function BuddiesUnbuddyButtons({buddy, onDelete}) {

    return (
        <div>
            {/* <button type="button" className="btn btn-danger" onClick={handleClick}>Delete Buddy</button> */}
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteBuddyModal" onClick={() => onDelete(buddy)}>Delete Buddy</button>
        </div>
    )
};

export default BuddiesUnbuddyButtons;
