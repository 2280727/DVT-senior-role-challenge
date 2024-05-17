import { footerData } from "@/lib/data"
import React from "react"


export const Footer: React.FC = () => {
    return(
       <footer className="flex space-x-[15px] md:space-x-16 py-6 ">
            {Object.entries(footerData).map(([key, value], i) => (
                <RenderFooterSection key={i} title={key} column={value} />
            ))}
       </footer> 
    )
}

function RenderFooterSection({ column, title }: { column: string[], title: string}) {
    return(
        <div className="flex flex-col text-white ">
            <h2 className="font-bold">{title}</h2>
            <ul>
            {column.map((row, i) => (
                <li  key={i}>{row}</li>
            ))}
            </ul>
        </div>
    )
}