import { Link, NavLink, Outlet } from "react-router";

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
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "text-indigo-200" : "text-white"
            }
            end
          >
            Posts
          </NavLink>
          <Link
            to="/posts/new-post"
            // className={({ isActive }) =>
            //   isActive ? "text-indigo-200" : "text-white"
            // }
            // end
          >
            New Post
          </Link>
        </nav>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
