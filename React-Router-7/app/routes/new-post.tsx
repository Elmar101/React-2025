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
      <Form method="POST" className="max-w-[30rem]">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            className="p-2 border border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            className="p-2 border border-gray-400"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-black px-3 py-2 rounded hover:bg-indigo-400"
        >
          Create
        </button>
      </Form>
    </>
  );
}
