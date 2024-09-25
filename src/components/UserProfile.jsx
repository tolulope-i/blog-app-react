import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';


//... other imports and code

function UserProfile() {
    const { userId } = useParams();
    const [user, setUser] = useState();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        // Fetch user data from localStorage
        const fetchUserData = () => {
            const storedProfile = localStorage.getItem('userProfile');
            if (storedProfile) {
                const profileData = JSON.parse(storedProfile);
                setUser(profileData);
            }
        };

        const fetchUserPosts = () => {
            const posts = [
                { id: 1, title: "First Post", content: "Content of the first post..." },
                { id: 2, title: "Second Post", content: "Content of the second post..." },
            ];
            setUserPosts(posts);
        };

        fetchUserData();
        fetchUserPosts();
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="user-profile">
            <div className="profile-header">
                <img
                    src={user.profileImage || "../src/assets/default-profile.jpg"}
                    alt={`${user.name}'s profile`}
                    className="profile-image"
                />
                <h2>{user.name}</h2>
                <h3>{user.job}</h3>
                <p>{user.bio}</p>
                <div className='links'>
                    <Link to="/" className='homepage-redirect'>go to home</Link>
                    <Link to="/create-post" className='create-post'>create post</Link>
                    <Link to="/user/create-profile" className='edit-profile'>edit profile</Link>
                </div>
            </div>
            <div className="user-posts">
                <h3>Posts by {user.name}</h3>
                <ul>
                    {userPosts.map(post => (
                        <li key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserProfile;
