import { cartItemsAtom } from "@/lib/state/atoms";
import { Product } from "@/lib/types/product"
import { useAtom } from "jotai";
import Image from "next/image";

type Rating = {
    rate: number;
    count: number;
};
type CartCardProps ={
    product: Product
}

export const CartCard: React.FC<CartCardProps> =({
    product,
}) => {
    const [cartItems, setCartItems ] = useAtom(cartItemsAtom)
    const rating: Rating = product.rating;
    return (
        <div className="flex relative align-middle bg-white overflow-hidden w-[430px] p-4 h-[150px] border-b-2">
            <Image
                src={product.image}
                width={100}
                height={100} 
                className="w-[100px] h-[100px]"    
                alt="Product Photo"
            />
            <section className="flex flex-col">
                <p className="px-3 mt-2 ">{product.title}</p>
                <p className="px-3 mt-4 font-bold">R{product.price}</p>
            </section>
            <button
            className="absolute top-[10px] right-[10px] bg-gray-100 rounded-full p-2 shadow-md shadow-gray-500 cursor-pointer"
            onClick={() => {
                setCartItems(
                    cartItems.filter(a => 
                        a.id !== product.id 
                        )
                )
            }}
            >
                X
            </button>
        </div>
    )
}