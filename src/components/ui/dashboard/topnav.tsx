import { cartModal } from '@/lib/state/atoms'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { BsCartPlus } from 'react-icons/bs'
import { CartPopOver } from './cart-pop-over'


export default function TopNav() {
    const [open ,setOpen] = useAtom(cartModal)
    return (
        <header className="flex w-full h-14 flex-row border-b-2 border-black px-2 py-2">
            <Image 
                src={"/favicon.ico"}
                width={40}
                height={60}
                alt=""
            />
            <ul className='flex absolute space-x-[15px] right-6 text-[25px] mb-[2]'>
                <li>Login</li>
                <li className=' rounded-xl space-x-[5px] bg-green-500  text-white p-[2px]'><CartPopOver/></li>
                
            </ul>
        </header>
    )
}