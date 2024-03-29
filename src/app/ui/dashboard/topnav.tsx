import Image from 'next/image'

export default function TopNav() {
    return (
        <header className="flex w-full h-14 flex-row border-b-2 border-black px-2 py-2">
            <Image 
                src={"/favicon.ico"}
                width={40}
                height={60}
                alt=""
            />
        </header>
    )
}