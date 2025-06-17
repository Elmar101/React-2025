import { Link, Outlet } from "react-router";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-gray-800 p-8 text-white">
        Blog Post
        <nav className="flex gap-2">
          <Link to="/posts">Posts</Link>
          <Link to="/posts/new-post">New Post</Link>
        </nav>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
