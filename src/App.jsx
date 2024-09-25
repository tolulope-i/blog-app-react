import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/blogList';
import BlogForm from './components/blogForm';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import CreateProfile from './components/CreateProfile';

// Default posts
const defaultPosts = [
    {
        id: 1,
        topic: 'First Blog Post',
        content: 'This is the content of the first blog post.',
        category: 'General',
        author: 'Author 1',
        authorId: 1,
        job: 'Writer',
        image: "src/assets/laptop-with-cup1.jfif",
        authorImage: "src/assets/mark.jpg",
    },
    {
        id: 2,
        topic: 'Second Blog Post',
        content: 'This is the content of the second blog post.',
        category: 'Tech',
        author: 'Author 2',
        authorId: 2,
        job: 'Developer',
        image: "src/assets/laptop-with-cup2.jfif",
        authorImage: "src/assets/mark.jpg",
    },
    {
        id: 3,
        topic: 'Third Blog Post',
        content: 'This is the content of the third blog post.',
        category: 'Lifestyle',
        author: 'Author 3',
        authorId: 3,
        job: 'Blogger',
        image: "src/assets/laptop-with-cup1.jfif",
        authorImage: "src/assets/mark.jpg",
    },
];

function App() {
    const [blogPosts, setBlogPosts] = useState(defaultPosts);

    useEffect(() => {
        const storedPosts = localStorage.getItem('blogPosts');
        if (storedPosts) {
            const parsedPosts = JSON.parse(storedPosts);
            if (Array.isArray(parsedPosts) && parsedPosts.length > 0) {
                setBlogPosts(parsedPosts);
            }
        }
    }, []);

    const addBlogPost = (newPost) => {
        const updatedPosts = [...blogPosts, newPost];
        setBlogPosts(updatedPosts);
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    };

    const deleteBlogPost = (postIndex) => {
        const updatedPosts = blogPosts.filter((_, index) => index !== postIndex);
        setBlogPosts(updatedPosts);
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    };

    const editBlogPost = (postIndex, updatedPost) => {
        const updatedPosts = blogPosts.map((post, index) => 
            index === postIndex ? { ...post, ...updatedPost } : post
        );
        setBlogPosts(updatedPosts);
        localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<BlogList blogPosts={blogPosts} onDelete={deleteBlogPost} onEdit={editBlogPost} />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/create-post" element={<BlogForm addBlogPost={addBlogPost} />} />
                <Route path="/user/:userId" element={<UserProfile />} />
                <Route path="/user/create-profile" element={<CreateProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
