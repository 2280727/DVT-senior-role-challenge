"use client"
import TopNav from "../ui/dashboard/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex h-screen flex-col ">
            <div className="flex-none ">
                <TopNav/>
            </div>
            <div className="flex-grow p-6">{children}</div>
        </div>

    );
} 