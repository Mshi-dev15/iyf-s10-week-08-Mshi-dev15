function UserCard({ user }) {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
            <h4>{user.name}</h4>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
        </div>
    );
}

function UserList({ users = [] }) {
    if (users.length === 0) {
        return <p>No users found!</p>;
    }

    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;