import { cartItemsAtom } from "@/lib/state/atoms";
import { Product } from "@/lib/types/product";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

type Rating = {
    rate: number;
    count: number;
};
type ProductCardProps = {
    product: Product,
}


export const ProductCard: React.FC<ProductCardProps> = ({
    product,
   
}) => {
     const [ cartItems, setCartItems ] = useAtom(cartItemsAtom)
     const addToCart = () => {
        if(!cartItems.includes(product)){
            setCartItems(
                [
                  ...cartItems,
                  product
                ]
              )     
        }
      }
      const rating: Rating = product.rating;

    return (
        <Link className="flex flex-col relative align-middle bg-white overflow-hidden w-[150px] p-4 h-[340px]" href={""}>
            <Image
                src={product.image}
                width={200}
                height={600} 
                className="w-[80%] h-[70%] static"    
                alt="Product Photo"
            />
            <p className="px-3 mt-2 line-clamp-2">{product.title}</p>
            <p className="px-3 mt-4 font-bold">R{product.price}</p>
            <span className="flex px-3 mt-4 text-[12px]" >
                <IoIosStar className="h-4 w-4 text-yellow-600"/>
                <p>{` ${rating.rate} (${rating.count})`}</p>
            </span>
            <button
            aria-label={`Add ${product.id}`}
            className="absolute top-[10px] right-[10px] bg-gray-100 rounded-full p-2 shadow-md shadow-gray-500 cursor-pointer"
            onClick={addToCart}
            >
                <BsCartPlus  className="w-8 h-8"/>
            </button>
        </Link>
    );
}