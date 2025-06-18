import { getUserById } from "~/db/users";
import type { Route } from "./+types/user-detail";
import { Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const { userId } = params;
  try {
    const user = await getUserById(userId);
    return user;
  } catch (error) {
    return null;
  }
}
export default function UserDetail({ loaderData }: Route.ComponentProps) {
  if (!loaderData) {
    return <div>User not found</div>;
  }

  return (
    <div className="rounded border text-white bg-gray-900 mx-6 my-6">
      <h1>User Detail</h1>
      <hr />
      <p>{loaderData?.name}</p>
      <p>{loaderData?.email}</p>
      <p>{loaderData?.phone}</p>
      <p>{loaderData?.website}</p>
      <p>{loaderData?.address.city}</p>
      <p>{loaderData?.company.name}</p>
      <p>{loaderData?.company.catchPhrase}</p>
      <p>{loaderData?.company.bs}</p>
      <p>{loaderData?.address.geo.lat}</p>
      <Link to={`/users`}>BACK...</Link>
    </div>
  );
}
