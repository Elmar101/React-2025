import { getAllUsers } from "~/db/users";
import type { Route } from "./+types/users";
import { Link } from "react-router";

export const loader = () => {
  return getAllUsers();
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
          <Link to={`/users/${user.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
}
