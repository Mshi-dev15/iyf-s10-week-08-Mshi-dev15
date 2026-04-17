import LikeablePostCard from './LikeablePostCard';

function LikeablePostList({ posts, onLike }) {
    return (
        <div>
            {posts.map(post => (
                <LikeablePostCard
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                />
            ))}
        </div>
    );
}

export default LikeablePostList;