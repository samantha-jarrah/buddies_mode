import React, {useState} from 'react';
import BuddiesUnbuddyButton from './BuddiesUnbuddyButton';
import BuddiesProfilePic from './BuddiesProfilePic';

// Buddies card component
function BuddiesCurrentCard({buddy}) {
    const [showModal, setShowModal] = useState(false);
    const [buddyToDelete, setBuddyToDelete] = useState(null);

    const handleDelete = () => {
        // TODO: Do we do our API call here? And somehow rerender to get rid of that card?
        console.log("Deleting buddy: ", buddyToDelete);
        setShowModal(false);
        setBuddyToDelete(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setBuddyToDelete(null);
    };

    return (
        <div className="card" style={{ width: 18 + 'rem' }}>
            <BuddiesProfilePic />
            <div className="card-body">
                <h5 className="card-title">{buddy.firstName} {buddy.lastName}</h5>
                <BuddiesUnbuddyButton 
                    buddy={buddy}
                    onDelete={() => {
                        setBuddyToDelete(buddy);
                        setShowModal(true);
                    }}/>
            </div>
            {/* Modal */}
            {showModal &&
            <div className={`modal fade ${showModal ? 'show' : ''}`} id="deleteBuddyModal" tabIndex="-1" aria-labelledby="deleteBuddyModalLabel" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteBuddyModalLabel">Confirm Deletion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete {buddyToDelete && `${buddyToDelete.firstName} ${buddyToDelete.lastName}`} from your buddies?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </div>
    )
};

export default BuddiesCurrentCard;