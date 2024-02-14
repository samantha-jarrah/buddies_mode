import React, { useState, useEffect } from 'react';
import BuddiesCurrentCard from './BuddiesCurrentCard';

// Current Buddies Table
function BuddiesCurrentTable() {
    const [CurrentBuddiesData, setCurrentBuddiesData] = useState([
        {profileId: 11896, firstName: 'Blanche', lastName: 'Devereaux'},
        {profileId: 56208, firstName: 'Sophia', lastName: 'Petrillo'},
        {profileId: 1120, firstName: 'Dorothy', lastName: 'Zbornak'},
        {profileId: 9287, firstName: 'Rose', lastName: 'Nyland'},
    ]);
    // TODO: API call for above useStates
    return (
        <div>
            <h2>Current Buddies</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 20 +'px' }}>
            {CurrentBuddiesData.length === 0 ? (
            <p>No Buddies to Display. Try searchiing above!</p>) : (
                CurrentBuddiesData.map((buddy) => (
                    <BuddiesCurrentCard key={buddy.profileId} buddy={buddy} />
                ))
            )}
            </div>
        </div>
    )
};

export default BuddiesCurrentTable;