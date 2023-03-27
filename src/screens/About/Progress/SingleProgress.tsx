
type Props = {
    boxmargin:any,
    heading: string,
    ImageURL: React.ReactNode,
    Paragraph: string,
    Paragraph2?: string,
    Paragraph3?:string, 
    subheading?:string,
    boxheight:any  
}

const SingleProgress=({heading,ImageURL,Paragraph,Paragraph2,Paragraph3,boxmargin,subheading,boxheight}:Props)=>{

    return(
        <section className={`bg-white w-[16.063rem]  rounded-lg flex flex-col px-6 py-4 items-start`} style={{ marginTop:boxmargin,height:boxheight}} >
            <h2 className='font-bold text-3_8XL leading-widen text-primary'>
                {heading}
            </h2>

            <section>
                {ImageURL}
            </section>

            <h3 className='font-bold text-secondary text-xxs text-right w-1/2'>
                {subheading}
            </h3>

            <p className='text-sm text-lightBlue font-normal py-2'>
                {Paragraph}
            </p>

            <p className='text-sm text-lightBlue font-normal py-2'>
                {Paragraph2}
            </p>

            <p className='text-sm text-lightBlue font-normal py-2'>
                {Paragraph3}
            </p>

        </section>
    )

}

export default SingleProgress