function PostCard({ title, excerpt, author, date, likes, onLike, onDelete }) {
    return (
        <article style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
        }}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>By {author} — {date}</span>
                <div>
                    <button onClick={onLike}>
                        ❤️ {likes}
                    </button>
                    <button
                        onClick={onDelete}
                        style={{ marginLeft: '8px', color: 'red' }}
                    >
                        🗑️ Delete
                    </button>
                </div>
            </div>
        </article>
    );
}

export default PostCard;