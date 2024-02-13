import React from 'react';

// buttons to accept or decline buddy requests
function BuddiesAcceptDeclineButtons() {
    return (
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            {/* TODO: add onClick actions for buttons 
            API: /users/{userId}/buddies/{buddyId}/{status}*/}
            <button type="button" className="btn btn-success">Accept</button>
            <button type="button" className="btn btn-danger">Decline</button>
        </div>
    )
};

export default BuddiesAcceptDeclineButtons;