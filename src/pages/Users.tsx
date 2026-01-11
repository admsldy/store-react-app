import type { UserInterface } from "../types/user.inteface";
import { useFetch } from "../hooks/useFetch";

const Users = () => {
    const { data: users, isLoading, error } = useFetch<UserInterface>(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (
        <div>
            <h1>Users list</h1>

            {isLoading && <h2 className="loading">Loading users...</h2>}
            {error && <h2 className="error">{error}</h2>}

            {!isLoading && !error && users.length > 0 && (
                <ul>
                    {users.map((user: UserInterface) => (
                        <li key={user.id}>
                            {user.name} ({user.email})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
