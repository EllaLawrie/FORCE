import Spacer from '@/components/Spacer';
import YearProgress from './YearProgress.json';
import SingleProgress from './SingleProgress';
import Image from 'next/image';


const switchmargin:any={2017:'150px', 2019:'85px', 2020:'50px', 2022:'3px'}
const switchheight:any ={2017:'217px', 2019:'280px', 2020:'310px', 2022:'350px'}

const AllProgress =()=>{
    return(
        <Spacer classnames=' our-journey'>
        <section className='flex flex-col lg:flex lg:flex-row items-center justify-center lg:pt-64 gap-6'>
        {YearProgress.YearProgress.map((progress) => {
          return (
            <SingleProgress
            boxheight={switchheight[progress.year]}
            boxmargin={switchmargin[progress.year]}
            heading={progress.year}
            ImageURL={<Image src={progress.image} alt={'achivements'} width={140} height={30}/>}
            subheading={progress.subheading}
            key={progress.year}
            Paragraph={progress.Summary}
            Paragraph2={progress.Summary2}
            Paragraph3={progress.Summary3}
            />
          )
        })}
      </section>
      </Spacer>
    )
}

export default AllProgress