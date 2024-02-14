// This should be moved to pages directory
import React, { useState, useEffect } from 'react';
import BuddiesPendingTable from '../components/BuddiesComponents/BuddiesPendingTable';
import BuddiesCurrentTable from '../components/BuddiesComponents/BuddiesCurrentTable';

// Main Buddies Table
function BuddiesMode() {
    return (
        <div>
            {/* TODO: add BuddiesSearchBar */}
            <div><BuddiesPendingTable /></div>
            <div><BuddiesCurrentTable /></div>
        </div>
    )
};

export default BuddiesMode;