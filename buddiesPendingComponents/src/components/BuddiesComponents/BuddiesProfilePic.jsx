import React from 'react';
import DefaultProfilePic from '../../images/DefaultProfilePic.jpg';

function BuddiesProfilePic() {
    // TODO: Needs to have conditional logic, if there is a profile pic in DB user that, otherwise use default
    return <img src={DefaultProfilePic} className="card-img-top" alt="Default profile pic" />
};

export default BuddiesProfilePic;