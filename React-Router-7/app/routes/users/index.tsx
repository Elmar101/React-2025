import { deleteUserById, getAllUsers } from "~/db/users";
import { Form, Link } from "react-router";
import type { Route } from "./+types";

export const loader = () => {
  return getAllUsers();
};

export const action = async ({ params }: Route.ActionArgs) => {
  try {
    const res = await deleteUserById("2");
    return res;
  } catch (error) {
    return {
      error: "User not found",
    };
  }
};

export default function Users({ loaderData }: Route.ComponentProps) {
  return (
    <div className=" rounded border text-white flex flex-row gap-2 flex-wrap  justify-center mt-12">
      {loaderData?.map((user) => (
        <div
          key={user.id}
          className="bg-gray-800 p-4 border border-gray-700 rounded w-120"
        >
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.address.city}</p>
          <Form method="delete">
            <button
              type="submit"
              className="bg-red-700 p-2 rounded cursor-pointer"
            >
              Delete User
            </button>
          </Form>
          <Link to={`/users/${user.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
}
