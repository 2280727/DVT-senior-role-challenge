import Image from 'next/image'

type ImageTabProps = {
    imgUrl: string,
    tabTitle: string,
    key: string,
}
export const ImageTab = ( props: ImageTabProps ) => {
    return(
        <figure className='flex flex-col'>
            <Image
            key={props.key}
            className='rounded-full' 
            src={props.imgUrl}
            width={120}
            height={120}
            alt=""
            />
            <p className='flex justify-center'>{props.tabTitle}</p>
         </figure>
    )
}