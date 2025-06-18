import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Outlet />
    </div>
  );
}
