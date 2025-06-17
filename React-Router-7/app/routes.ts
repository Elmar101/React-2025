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
      route("", "routes/posts.tsx"),
      route(":postId", "routes/post-details.tsx"),
      route("new-post", "routes/new-post.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
