function Stats({ totalPosts, totalLikes }) {
    return (
        <div>
            <h3>Community Stats</h3>
            <p>Total Posts: {totalPosts}</p>
            <p>Total Likes: {totalLikes}</p>
        </div>
    );
}

export default Stats;