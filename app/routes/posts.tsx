import { getPosts } from "~/db/posts";
import type { Route } from "./+types/posts";

export const loader = () => {
  // code for loading posts
  return getPosts();
};

// export function loader() {}

export default function Posts({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {loaderData?.map?.((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
