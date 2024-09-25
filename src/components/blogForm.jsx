import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogForm({ addBlogPost }) {
    const [blogTitle, setBlogTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [blogCategory, setBlogCategory] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [blogAuthor, setBlogAuthor] = useState('');

    const navigate = useNavigate();

    const getUserProfile = () => {
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            return JSON.parse(storedProfile);
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!imageUpload) {
            alert("Please upload an image");
            return;
        }

        const userProfile = getUserProfile();

        const newPost = {
            topic: blogTitle,
            job: jobDescription,
            category: blogCategory,
            content: blogContent,
            author: userProfile ? userProfile.name : 'Unknown Author',
            job: userProfile ? userProfile.job : 'Unknown Job',
            authorImage: userProfile ? userProfile.profileImage : 'default-image-path',
            image: URL.createObjectURL(imageUpload),
        };

        addBlogPost(newPost);
        

        // Reset form fields
        setBlogTitle('');
        setJobDescription('');
        setBlogCategory('');
        setBlogContent('');
        setImageUpload(null);
        setBlogAuthor('');

        navigate('/'); 
    };

    return (
        <div className="container-wrapper">
            <div className="blog-container">
                <div className="heading">
                    <h2>make a post</h2>
                </div>
                <div className="blogform-container">
                    <form onSubmit={handleSubmit} id="user-form">
                        <div className="inner">
                            <input 
                                type="text" 
                                placeholder="Title" 
                                required 
                                value={blogTitle} 
                                onChange={(e) => setBlogTitle(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                placeholder="Job Description" 
                                required 
                                value={jobDescription} 
                                onChange={(e) => setJobDescription(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                placeholder="Post Category" 
                                required 
                                value={blogCategory} 
                                onChange={(e) => setBlogCategory(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                placeholder="Author" 
                                required 
                                value={blogAuthor} 
                                onChange={(e) => setBlogAuthor(e.target.value)} 
                            />
                            <input 
                                type="file" 
                                accept="image/*" 
                                required 
                                onChange={(e) => setImageUpload(e.target.files[0])} 
                            />
                            <textarea 
                                placeholder="Write here..." 
                                value={blogContent} 
                                onChange={(e) => setBlogContent(e.target.value)}
                            ></textarea>
                            <button type="submit">Publish</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BlogForm;
