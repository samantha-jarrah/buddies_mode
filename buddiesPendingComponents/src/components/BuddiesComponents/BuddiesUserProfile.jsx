import DefaultProfilePic from '../../images/DefaultProfilePic.jpg';
import BuddiesAddButton from './BuddiesAddButton';
import BuddiesDeleteButton from './BuddiesDeleteButton';

const BuddiesProfile = ([buddy]) => {
    return (
        <div>
            <h2>
                {buddy.name}'s Profile
            </h2>
            <BuddiesAddButton buddyId = {buddy.id} />
            <BuddiesDeleteButton buddyId = {buddy.id} />

        </div>
    );
};

export default BuddiesProfile;


