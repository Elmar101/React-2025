# Welcome to React Router!

# if you want to client render then use this clientLoader instead of loader (posts and post-details pages and react-router-config.js -> ssr: false)

# ssr

=> react-router-config.js

```
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
} satisfies Config;
```

=> app/routes/posts.tsx

```
import { getPosts } from "~/db/posts";
import type { Route } from "./+types/posts";
import { Link, Outlet } from "react-router";

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
            <p>{<Outlet />}</p>
            <p>
              <Link to={`/posts/${post.id}`}> Read Post Detail</Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
```

# csr

=> react-router-config.js

```
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
} satisfies Config;
```

=> app/routes/posts.tsx

```
import { getPosts } from "~/db/posts";
import type { Route } from "./+types/posts";
import { Link, Outlet } from "react-router";

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
            <p>{<Outlet />}</p>
            <p>
              <Link to={`/posts/${post.id}`}> Read Post Detail</Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
```

# Nested Routes

import {
type RouteConfig,
index,
layout,
prefix,
route,
} from "@react-router/dev/routes";

export default [
index("routes/home.tsx"),
route("about", "routes/about.tsx"),
layout("components/posts-layout.tsx", [
...prefix("posts", [
route("", "routes/posts.tsx", [
route(":postId", "routes/post-details.tsx"),
]),
route("new-post", "routes/new-post.tsx"),
]),
]),
] satisfies RouteConfig;

after use <Outlet/>

# Static Pre-render (Next Js deki SSG) build time create static html files

=> react-router.config.ts

```
import type { Config } from "@react-router/dev/config";

export default {
  // return a list of URLs to prerender at build time
  async prerender() {
    return ["/", "/about", "/contact"];
  },
} satisfies Config;

```
