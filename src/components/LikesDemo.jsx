import { useState } from 'react';
import Stats from './Stats';
import LikeablePostList from './LikeablePostList';

function LikesDemo() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Getting Started with React", excerpt: "Learn React basics...", author: "Alice", likes: 0 },
        { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner code...", author: "Bob", likes: 0 },
        { id: 3, title: "CSS Tips and Tricks", excerpt: "Style like a pro...", author: "Charlie", likes: 0 }
    ]);

    // This function lives in the parent
    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, likes: post.likes + 1 }
                : post
        ));
    };

    // Calculate total likes from all posts
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    return (
        <div>
            <h3>Likes Demo</h3>

            {/* Stats receives total numbers */}
            <Stats
                totalPosts={posts.length}
                totalLikes={totalLikes}
            />

            {/* PostList receives posts and the like function */}
            <LikeablePostList
                posts={posts}
                onLike={handleLike}
            />
        </div>
    );
}

export default LikesDemo;