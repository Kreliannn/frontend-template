"use client"
import Link from "next/link";
import { TestSideBar } from "@/components/ui/sidebar.Template";
import UnauthorizedPage from "@/components/ui/unauthorizedPage";
import useUserStore from "@/app/store/useUserStore";
import { SidebarProvider } from "@/components/ui/sidebar";


export default function ManagerLayout({ children }: { children: React.ReactNode }) {

    //const {user} = useUserStore()

    //if(!user || !user?.role.isAdmin) return <UnauthorizedPage />

    return (
      <div className="flex min-h-screen ">
          <SidebarProvider>
                
                <TestSideBar />
               
                <main className="w-full">
                    <div className="mb-[80px] md:mb-[0px]"> </div>
                    {children}
                </main>
          </SidebarProvider>
       
      </div>
    );
  }