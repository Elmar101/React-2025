import { Form, redirect, useNavigate, useSubmit } from "react-router";
import type { Route } from "./+types/new-post";
import { createPost } from "~/db/posts";
import { error } from "console";

export const action = async ({ request }: Route.ActionArgs) => {
  // code for creating a new post
  const fd = await request.formData();
  const title = fd.get("title") as string;
  const description = fd.get("description") as string;
  // add validation here
  if (!title || !description) {
    return {
      error: "Title and description are required",
    };
  }

  createPost({ title, description });

  return redirect("/posts");
};

export default function NewPost({ actionData }: Route.ComponentProps) {
  const { error } = actionData ?? {};

  // Client Side submit action
  const navigate = useNavigate();
  const submit = useSubmit();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit(e.currentTarget, { method: "POST" });
    // navigate("/posts");
  };

  return (
    <>
      <h1>New Post</h1>
      {/* <Form method="POST" className="max-w-[30rem]"> */}
      <form onSubmit={handleSubmit} className="max-w-[30rem]">
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
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-indigo-500 text-black px-3 py-2 rounded hover:bg-indigo-400"
        >
          Create
        </button>
      </form>
      {/* </Form> */}
    </>
  );
}
