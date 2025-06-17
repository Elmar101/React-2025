import { Form, redirect } from "react-router";
import type { Route } from "./+types/new-post";
import { createPost } from "~/db/posts";

export const action = async ({ request }: Route.ActionArgs) => {
  // code for creating a new post
  const fd = await request.formData();
  const title = fd.get("title") as string;
  const description = fd.get("description") as string;
  // add validation here
  createPost({ title, description });

  return redirect("/posts");
};

export default function NewPost() {
  return (
    <>
      <h1>New Post</h1>
      <Form method="POST">
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input id="description" name="description" />
        </div>
        <button type="submit">Create</button>
      </Form>
    </>
  );
}
