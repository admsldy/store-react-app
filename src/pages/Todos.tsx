import { useFetch } from "../hooks/useFetch";
import type { TodoInterface } from "../types/todo.interface";

const Todos = () => {
    const { data: todos, isLoading, error } = useFetch<TodoInterface>(
        "https://jsonplaceholder.typicode.com/todos", 20
    );

    return (
        <div>
            <h1>Todos list</h1>

            {isLoading && <h2 className="loading">Loading todos...</h2>}
            {error && <h2 className="error">{error}</h2>}

            {!isLoading && !error && todos.length > 0 && (
                <ul>
                    {todos.map((todo: TodoInterface) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Todos;
