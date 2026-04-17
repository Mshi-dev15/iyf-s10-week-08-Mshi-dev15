import { useState } from 'react';
import Layout from './components/Layout';
import Card from './components/Card';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Getting Started with React",
            excerpt: "Learn the basics of React and how to build components...",
            author: "Alice",
            date: "Jan 15, 2026",
            likes: 0
        },
        {
            id: 2,
            title: "JavaScript Best Practices",
            excerpt: "Write cleaner and more efficient JavaScript code...",
            author: "Bob",
            date: "Jan 14, 2026",
            likes: 0
        },
        {
            id: 3,
            title: "CSS Tips and Tricks",
            excerpt: "Make your website look amazing with these CSS tips...",
            author: "Charlie",
            date: "Jan 13, 2026",
            likes: 0
        }
    ]);

    const [search, setSearch] = useState('');

    // ADD a new post
    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    // LIKE a post
    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, likes: post.likes + 1 }
                : post
        ));
    };

    // DELETE a post
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    // FILTER posts by search
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Layout>
            <div style={{ display: 'flex', gap: '20px' }}>
                <main style={{ flex: 2 }}>
                    <Card title="Create a Post">
                        <CreatePost onAddPost={handleAddPost} />
                    </Card>

                    <Card title="Search Posts">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search posts..."
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </Card>

                    <Card title={`Posts (${filteredPosts.length})`}>
                        <PostList
                            posts={filteredPosts}
                            onLike={handleLike}
                            onDelete={handleDelete}
                        />
                    </Card>
                </main>

                <aside style={{ flex: 1 }}>
                    <Sidebar
                        totalPosts={posts.length}
                        totalLikes={posts.reduce((sum, p) => sum + p.likes, 0)}
                    />
                </aside>
            </div>
        </Layout>
    );
}

export default App;