import { footerData } from "@/lib/data"


export const Footer: React.FC = () => {
    return(
       <footer className=" flex space-x-[30px] py-6 ">
            {Object.entries(footerData).map(([key, value], i) => (
                <RenderFooterSection key={i} title={key} column={value} />
            ))}
       </footer> 
    )
}

function RenderFooterSection({ column, title }: { column: string[], title: string}) {
    return(
        <ul>
            {column.map((row, i) => (
                    <li className="text-white" key={i}>{row}</li>
                ))
            }
        </ul>
    )
}