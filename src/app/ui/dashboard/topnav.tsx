import Image from 'next/image'

export default function TopNav() {
    return (
        <header className="flex w-full h-12 flex-row border-b-2 border-black px-3 py-4">
            <Image 
                src={"/eliteevents.png"}
                width={60}
                height={60}
                alt=""
            />
        </header>
    )
}