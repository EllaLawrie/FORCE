import React from 'react'
import Image from "next/image";

type Props = {
    imageURL: string;
    paragraph: string;
    
  };

const SingleDownloadButton = ({imageURL,paragraph}:Props) => {
  return (
    <button className='bg-white rounded-lg border-SoftBackgroundGray flex items-center  py-2.5 px-4 '>
        <div className='overflow-hidden h-[30px] w-[24px] mr-3'><Image src={imageURL} alt={paragraph} width={100} height ={100}/></div>
        
        <p className='font-medium text-sm text-brandBlack'>{paragraph}</p>

    </button>
  )
}

export default SingleDownloadButton