import Header from "@/components/navigation/header";
import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div className="w-full flex flex-col gap-6 bg-gray-100">
      <Header />
      <div className="max-w-screen-2xl px-8 h-full mx-auto w-full pb-5">
        <Outlet />
      </div>
    </div>
  );
}
