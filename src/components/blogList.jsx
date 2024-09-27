import React from 'react';
import BlogPost from './blogPost';


function BlogList({ blogPosts, onEdit, onDelete }) {

    if (!blogPosts) {
        return <p>No blog post found</p>
    }

    return (
        <main>
            <div className="main-section">
                {blogPosts.map((post, index) => (

                    <BlogPost
                        key={post.id || index * post.title.split().join("")}
                        post={post}
                        index={index}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />

                ))}
            </div>
        </main>
    );
}

export default BlogList;
