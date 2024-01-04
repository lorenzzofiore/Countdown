import React from 'react';
import './GrillaPost.css';
import Posts from '../data/posts.json';
import Post from './Post';

export default function GrillaPost() {
    return (
        <section className="grid-post">
            {Posts.map((post, index) => (
                <article key={index}>
                    <Post 
                        image={post.image}
                        title={post.title}
                        type={post.type}
                    />
                </article>
            ))}
        </section>
    );
}
