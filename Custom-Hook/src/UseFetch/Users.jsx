import useFetch from './useFetch';

function Users () {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <p>Loading users...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h3>Users</h3>
            {data && data.slice(0, 3).map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
};

export default Users;