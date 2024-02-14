// This should be moved to pages directory
import React, { useState, useEffect } from 'react';
import BuddiesPendingTable from './BuddiesPendingTable';

// Main Buddies Table
function BuddiesMode() {
    return (
        <div>
            {/* TODO: add BuddiesSearchBar */}
            <div><BuddiesPendingTable /></div>
            {/* TODO: add component for current buddies */}
        </div>
    )
};

export default BuddiesMode;