import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function BlogPost({ post, index, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedPost, setUpdatedPost] = useState(post);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onEdit(index, updatedPost);
        setIsEditing(false);
    };

    return (
        <article>
            <div className="container">
                <div className="blog-post blog-section">
                    <div className="post-content blog-post-image">
                        <img src={post.image} alt={post.topic} className="post-image" />
                    </div>
                    <p className="category">{post.category}</p>
                    <div className="post-header container-wrap">
                        <div className="title-and-content">
                            {isEditing ? (
                                <div>
                                    <input
                                        type="text"
                                        name="topic"
                                        value={updatedPost.topic}
                                        onChange={handleEditChange}
                                        className='edit-input'
                                    />
                                    <textarea
                                        name="content"
                                        value={updatedPost.content}
                                        onChange={handleEditChange}
                                        className='edit-textarea'
                                    />
                                    <button onClick={handleSave}>Save</button>
                                </div>
                            ) : (
                                <>
                                    <h2>{post.topic}</h2>
                                    <p>{post.content}</p>
                                    <button onClick={() => setIsEditing(true)}>Edit</button>
                                </>
                            )}
                        </div>
                        <div className="post-actions">
                            <button onClick={(e) => { e.stopPropagation(); onDelete(index); }}>
                                Delete
                            </button>
                        </div>
                        <div className="post-meta author-details">
                            <img src={post.authorImage} alt={`${post.author}'s avatar`} className="author-image" />
                            <div>
                                <h4>
                                    <Link to={`/user/${post.authorId}`}>{post.author}</Link>
                                </h4>
                                <p>{post.job}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default BlogPost;
