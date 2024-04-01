import Image from "next/image";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

type Rating = {
    rate: number;
    count: number;
};
type ProductCardProps = {
    imgUrl: string,
    productTitle: string,
    price: number,
    rating: Rating,

}


export const ProductCard: React.FC<ProductCardProps> = ({
    imgUrl,
    productTitle,
    price,
    rating
}) => {

    return (
        <Link className="flex flex-col relative align-middle bg-white overflow-hidden w-[230px] p-4 h-[500px]" href={""}>
            <Image
                src={imgUrl}
                width={200}
                height={600} 
                className="w-[100%] h-[70%]"    
                alt="Product Photo"
            />
            <p className="px-3 mt-2 ">{productTitle}</p>
            <p className="px-3 mt-4 font-bold">R120</p>
            <span className="flex px-3 mt-4 text-[12px]" >
                <IoIosStar className="h-4 w-4 text-yellow-600"/>
                <p>{` ${rating.rate} (${rating.count})`}</p>
            </span>
            <button
            className="absolute top-[10px] right-[10px] bg-gray-100 rounded-full p-2 shadow-md shadow-gray-500 cursor-pointer"
            onClick={() => {}}
            >
                <BsCartPlus  className="w-8 h-8"/>

            </button>
        </Link>
    );
}