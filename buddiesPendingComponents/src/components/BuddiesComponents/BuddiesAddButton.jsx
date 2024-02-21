import exp from 'constants';
import React, {useState} from 'react';

const AddBuddiesButton = ({buddiesId}) => {
    const [isBuddy, setisBuddy] = useState(false);

    const handleAddBuddy = () => {
        // here is will all of the API stuff will go 
        
        setisBuddy(!isBuddy);

    };

    return (
        <div>
            {isBuddy ? (
                <p>
                    Already Buddies!
                </p>
            ) : (
                <button onClick={[handleAddBuddy]}>Add Buddy</button>
            )};
        </div>
    );
    
};

export default AddBuddiesButton;