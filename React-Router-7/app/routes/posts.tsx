import { getPosts } from "~/db/posts";
import type { Route } from "./+types/posts";

export const loader = () => {
  return getPosts();
};

export default function Posts({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {loaderData?.map?.((post) => (
          <li key={post.id} className="mb-4 bg">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
