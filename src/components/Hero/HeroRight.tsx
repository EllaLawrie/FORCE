
type Props ={
    ImageSection: React.ReactNode,
    ImageSectionsm?:React.ReactNode,
    classnames?:string
}

const HeroRight =({ImageSection,ImageSectionsm,classnames}:Props)=>{

return(
 <section className='relative flex h-96 lg:h-full overflow-hidden w-full'>
    <section className='absolute bottom-0 right-0 lg:hidden'>
    {ImageSectionsm}
 </section>

<section className={ `${classnames}` }>
    {ImageSection}
 </section>
 
 </section>
)}

export default HeroRight