import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ blogPosts, onEdit, onDelete }) {
    return (
        <main>
            <div className="main-section">
                {blogPosts.map((post, index) => (
                    post ? (
                        <BlogPost 
                            key={post.id || index} 
                            post={post} 
                            index={index}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ) : null
                ))}
            </div>
        </main>
    );
}

export default BlogList;
