import PostCard from './PostCard';

function PostList({ posts, onLike, onDelete }) {
    if (posts.length === 0) {
        return <p>No posts found!</p>;
    }

    return (
        <div>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                    likes={post.likes}
                    onLike={() => onLike(post.id)}
                    onDelete={() => onDelete(post.id)}
                />
            ))}
        </div>
    );
}

export default PostList;