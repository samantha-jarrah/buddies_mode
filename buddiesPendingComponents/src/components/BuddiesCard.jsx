import React from 'react';

import BuddiesAcceptDeclineButtons from './BuddiesAcceptDeclineButtons';
import BuddiesProfilePic from './BuddiesProfilePic';

// Buddies card component
function BuddiesCard({buddy}) {
    return (
        // <Card style={{width: '18rem' }}>
        //     {/* TODO: Below is buddies pic or default...probably fix image component using styling from below? */}
        //     {/* <Card.Img variant="top" src="BuddiesProfilePic" /> */}
        //     <BuddiesProfilePic />
        //     <Card.Body>
        //         <Card.Title>{buddy.firstName} {buddy.lastName}</Card.Title>                
        //         <BuddiesAcceptDeclineButtons />
        //     </Card.Body>
        // </Card>
        <div className="card" style={{ width: 18 + 'rem' }}>
            <BuddiesProfilePic />
            <div className="card-body">
                <h5 className="card-title">{buddy.firstName} {buddy.lastName}</h5>
                <BuddiesAcceptDeclineButtons />
            </div>
        </div>
    )
};

export default BuddiesCard;