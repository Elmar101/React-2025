import React, { type JSX } from "react";
import { getPostById } from "~/db/posts";
import type { Route } from "./+types/post-details";

export function loader({ params }: Route.LoaderArgs) {
  const { postId } = params;
  try {
    const post = getPostById(Number(postId));
    return post;
  } catch (error) {
    return null;
  }
}

const PostDetails = ({ loaderData }: Route.ComponentProps) => {
  if (!loaderData) {
    return <div>Post not found</div>;
  }
  const { description } = loaderData;
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};
export default PostDetails;
