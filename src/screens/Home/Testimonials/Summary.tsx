import { TextSummary } from '@/components/Text/TextSummary'

import PaperPlane from '@/components/PaperPlane'

type Props = {}

const Top = () => {
  return (
    <p className='mt-24 text-secondary text-center text-sm font-medium '>
      Our leadership team
    </p>
  )
}

const Summary = (props: Props) => {
  return (
    <section className='relative'>
     <PaperPlane classnames=' lg:-top-[-10px] -left-[-210px] '/>
      <TextSummary
      hStyles='lg:w-[500px]'
        top={<Top />}
        header='Believes that outstanding customer experience are a direct result'
        paragraph='Here are the numbers to prove it.'
      />
    </section>
  )
}

export default Summary
