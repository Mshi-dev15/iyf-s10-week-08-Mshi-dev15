function LikeablePostCard({ post, onLike }) {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div>
                <span>By {post.author}</span>
                <button onClick={onLike}>
                    ❤️ {post.likes}
                </button>
            </div>
        </div>
    );
}

export default LikeablePostCard;