import { getPosts } from "~/db/posts";
import { Link, Outlet } from "react-router";
import type { Route } from "./+types";

export const loader = () => {
  return getPosts();
};

export default function Posts({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {loaderData?.map?.((post) => (
          <li
            key={post.id}
            className="mb-4 bg-gray-800 rounded border border-gray-700 p-4 text-white"
          >
            <h2>{post.title}</h2>
            <>{<Outlet />}</>
            <p>
              <Link to={`/posts/${post.id}`}> Read Post Detail</Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
