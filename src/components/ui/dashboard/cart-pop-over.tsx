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
import { calculateTotalPrice } from "@/lib/utils"

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
      <PopoverContent className="relative w-[350px] md:w-[500px] pr-0" align="start" side="bottom">
        
        {cartItems.length > 0 ? 
        <div>
          {cartItems.map((item, i)=>(
            <CartCard key={i} product={item} last={cartItems.length - 1  === i ? true : false}/>
          ))}
        <p className="absolute right-8 bottom-0 font-bold p-4">Total price: R{calculateTotalPrice(cartItems)}</p>
        </div>
          :(
            <section className="">
                <h1>No items in the cart</h1>
            </section>
          )
        }

      </PopoverContent>

    </Popover>
  )
}

  

