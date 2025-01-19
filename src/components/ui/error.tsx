import { IoIosThumbsDown } from "react-icons/io";
export function ErrorScreen (){
    return(
        <div className="grid  text-center text-[#a7201e] place-content-center" aria-label="productsError">
            <IoIosThumbsDown className="text-[100px] mx-[35%]"></IoIosThumbsDown>
            <p className="text-[50px]">Ooops...</p>
            <p className="text-black">There was an error retrieving the data requested. Please try again later</p>
        </div>
    )
}