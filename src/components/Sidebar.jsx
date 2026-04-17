function Sidebar({ totalPosts, totalLikes }) {
    return (
        <div>
            <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
            }}>
                <h3>Community Stats</h3>
                <p>Total Posts: {totalPosts}</p>
                <p>Total Likes: {totalLikes}</p>
            </div>

            <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
            }}>
                <h3>About CommunityHub</h3>
                <p>A place to share ideas and connect with others!</p>
            </div>

            <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px'
            }}>
                <h3>Tags</h3>
                <span style={{ marginRight: '8px' }}>#React</span>
                <span style={{ marginRight: '8px' }}>#JavaScript</span>
                <span style={{ marginRight: '8px' }}>#CSS</span>
                <span>#WebDev</span>
            </div>
        </div>
    );
}

export default Sidebar;