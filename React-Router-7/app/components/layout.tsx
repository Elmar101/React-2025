import { Outlet, NavLink } from "react-router";

export default function PostsLayout() {
  return (
    <>
      <header className="bg-gray-800 p-8 text-white">
        Blog Post
        <nav className="flex gap-2">
          <NavLink
            to="posts"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-200" : "text-white"
            }
          >
            Posts
          </NavLink>
          |
          <NavLink
            to="posts/new-post"
            className={({ isActive }) =>
              isActive ? "text-blue-200" : "text-white"
            }
          >
            New Post
          </NavLink>
          |
          <NavLink
            to="users"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-200" : "text-white"
            }
          >
            Users
          </NavLink>
        </nav>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  );
}
