import React, { useState, useEffect } from 'react';
import BuddiesCardOutgoingRequest from './BuddiesCardOutgoingRequest';
import BuddiesCardIncomingRequest from './BuddiesCardIncomingRequest';

// Buddies Pending Table
function BuddiesPendingTable() {
    const [IncomingPendingBuddiesData, setIncomingPendingBuddiesData] = useState([
        {profileId: 1234, firstName: 'Nira', lastName: 'Patel'},
        {profileId: 5678, firstName: 'Alejandra', lastName: 'Mendez'},
        {profileId: 1900, firstName: 'Samantha', lastName: 'Jarrah'},
        {profileId: 1987, firstName: 'Rachel', lastName: 'Etienne'},
        {profileId: 1040, firstName: 'Erin', lastName: 'Christ'},
    ]);
    const [OutgoingPendingBuddiesData, setOutgoingPendingBuddiesData] = useState([
        {profileId: 6453, firstName: 'Chris', lastName: 'Hundhausen'},
        {profileId: 4490, firstName: 'Jeremy', lastName: 'Castro'},
    ]);
    // TODO: API call for above useStates
    return (
        <div>
            <h2>Pending Buddy Requests</h2>
            <h3>Incoming</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 20 +'px' }}>
            {IncomingPendingBuddiesData.length === 0 ? (
            <p>No Incoming Requests</p>) : (
                IncomingPendingBuddiesData.map((buddy) => (
                    <BuddiesCardIncomingRequest key={buddy.profileId} buddy={buddy} />
                ))
            )}
            </div>
            <h3>Outgoing</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 20 +'px' }}>
            {OutgoingPendingBuddiesData.length === 0 ? (
            <p>No Outgoing Requests</p>) : (
                OutgoingPendingBuddiesData.map((buddy) => (
                    <BuddiesCardOutgoingRequest key={buddy.profileId} buddy={buddy} />
                ))
            )}
            </div>
        </div>
    )
};

export default BuddiesPendingTable;