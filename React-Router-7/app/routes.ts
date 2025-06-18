import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/layout.tsx"),
  // layout('routes/index.tsx', []),
  route("about", "routes/about/index.tsx"),
  // LAYOUT ROUTES AND NESTED ROUTES => POSTS
  layout("components/layout.tsx", [
    // NESSTED ROUTES =>USERS
    ...prefix("users", [
      route("", "routes/user/users.tsx"),
      route(":userId", "routes/user/user-detail.tsx"),
    ]),
    ...prefix("posts", [
      route("", "routes/posts/index.tsx", [
        route(":postId", "routes/posts/post-details.tsx"),
      ]),
      route("new-post", "routes/posts/new-post.tsx"),
    ]),
  ]),
  // LAYOUT ROUTES AND NESTED ROUTES => DASHBOARD
  layout("routes/dashboard/layout.tsx", [
    ...prefix("dashboard", [
      route("", "routes/dashboard/index.tsx"),
      route("persons", "routes/dashboard/persons/index.tsx"),
      route("news", "routes/dashboard/news/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
