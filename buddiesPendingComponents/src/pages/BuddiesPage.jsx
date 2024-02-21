// This should be moved to pages directory
import React, { useState, useEffect } from 'react';
import BuddiesPendingTable from '../components/BuddiesComponents/BuddiesPendingTable';
import BuddiesCurrentTable from '../components/BuddiesComponents/BuddiesCurrentTable';
import BuddiesModeSearch from '../components/BuddiesComponents/BuddiesSearchBar';

// Main Buddies Table
function BuddiesMode() {
    return (
        <div>
            <div><BuddiesModeSearch/></div>
            <div><BuddiesPendingTable /></div>
            <div><BuddiesCurrentTable /></div>
        </div>
    )
};

export default BuddiesMode;