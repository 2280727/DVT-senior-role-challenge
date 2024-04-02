"use client"
import { Footer } from "@/components/ui/dashboard/footer";
import TopNav from "@/components/ui/dashboard/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex h-screen flex-col ">
            <div className="flex-none ">
                <TopNav/>
            </div>
            <div className="flex flex-col justify-center">{children}</div>
            <div className="flex justify-center bg-slate-800 h-screen">
                <Footer/>
            </div>
        </div>

    );
} 