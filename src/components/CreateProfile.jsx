import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateProfile() {
    const [name, setName] = useState('');
    const [job, setJobDescription] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [bio, setBio] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the profile data to localStorage
        const profileData = {
            name,
            profileImage,
            job,
            bio,
        };
        localStorage.setItem('userProfile', JSON.stringify(profileData));

        // Navigate to the user's profile page
        navigate('/user/profile'); // Adjust the path as necessary
    };

    return (
        <div className='container-wrapper'>
            <div className='profile-container'>
                <h2>Create Your Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inner-form">
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Profile Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div>
                            <label>Job:</label>
                            <input
                                type="text"
                                value={job}
                                onChange={(e) => setJobDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Bio:</label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit">Create Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProfile;
