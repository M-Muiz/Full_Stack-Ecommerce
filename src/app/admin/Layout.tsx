"use client"

import Loader from "@/components/admin-pannel/Loader";
import Login from "@/components/admin-pannel/Login";
import SideBar from "@/components/admin-pannel/SideBar";
import { useAppSelector } from "@/redux/hooks"
import { useSession } from "next-auth/react";
import { GiDna1, GiNeckBite } from "react-icons/gi";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const isLoading = useAppSelector(store => store.loadingReducer);
  const { data: session } = useSession();

  // if (!session?.user) {
  //   return <Login />
  // }


  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-full">
        {/* <Navbar /> */}
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">
          {children}
        </div>
      </div>
      {isLoading && <Loader />}

    </div>
  )
}

export default Layout;
