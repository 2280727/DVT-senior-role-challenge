import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { cartItemsAtom } from "@/lib/state/atoms"
import { useAtom } from "jotai"
import React from "react"
import { BsCartPlus } from "react-icons/bs"
import { CartCard } from "./cart-card"

export const CartPopOver: React.FC = () =>{
  const [cartItems ] = useAtom(cartItemsAtom)
  const [open, setOpen] = React.useState(false)
  return(
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div className='flex'>
          <BsCartPlus  className="w-8 h-8"/>
          <p>{cartItems.length}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[500px]" align="end" side="bottom">
        {cartItems.length > 0 && 
          cartItems.map((item, i)=>(
            <CartCard key={i} product={item}/>
          ))
        }
      </PopoverContent>

    </Popover>
  )
}

  

