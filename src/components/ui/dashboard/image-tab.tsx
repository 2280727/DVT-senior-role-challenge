import Image from 'next/image'

type ImageTabProps = {
    imgUrl: string,
    tabTitle: string,
    key: string,
}
export const ImageTab = ( props: ImageTabProps ) => {
    return(
        <figure className='flex flex-col items-center justify-center'>
            <Image
            key={props.key}
            className='rounded-full w-[80px] h-[80px]' 
            src={props.imgUrl}
            width={120}
            height={120}
            alt=""
            />
            <p className=''>{props.tabTitle}</p>
         </figure>
    )
}