import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/layout.tsx"),
  route("about", "routes/about/index.tsx"),
  layout("components/layout.tsx", [
    ...prefix("users", [
      route("", "routes/users/index.tsx"),
      route(":userId", "routes/users/user-detail.tsx"),
    ]),
    ...prefix("posts", [
      route("", "routes/posts/index.tsx", [
        route(":postId", "routes/posts/post-details.tsx"),
      ]),
      route("new-post", "routes/posts/new-post.tsx"),
    ]),
  ]),
  layout("routes/dashboard/layout.tsx", [
    ...prefix("dashboard", [
      route("", "routes/dashboard/index.tsx"),
      route("persons", "routes/dashboard/persons/index.tsx"),
      route("news", "routes/dashboard/news/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
