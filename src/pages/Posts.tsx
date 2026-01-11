import type { PostInterface } from "../types/post.intarface";
import { useFetch } from "../hooks/useFetch";

const Posts = () => {
    const { data: posts, isLoading, error } = useFetch<PostInterface>(
        "https://jsonplaceholder.typicode.com/posts", 10
    );

    return (
        <div>
            <h1>Posts list</h1>

            {isLoading && <h2 className="loading">Loading posts...</h2>}
            {error && <h2 className="error">{error}</h2>}

            {!isLoading && !error && posts.length > 0 && (
                <ul>
                    {posts.map((post: PostInterface) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Posts;
