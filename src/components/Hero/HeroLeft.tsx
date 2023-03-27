import Button from '../Button/Button'
import Arrow from '../Arrow'
import Paragraph from '../Paragraph/Paragraph'

type Props = {
    subHeading: string
    heading: string
    paragraph: string
    leftButton?: boolean
    leftButtonText?: string
    rightButton?: boolean
    rightButtonText?: string
    onLeftButtonClick?: () => void
    onRightButtonClick?: () => void
    arrow?: boolean
    classnames?:string
    pclassnames?:string
  }
  const HeroLeft = (props: Props) => {
    const {
      subHeading,
      heading,
      paragraph,
      leftButton,
      leftButtonText,
      rightButton,
      rightButtonText,
      onLeftButtonClick,
      onRightButtonClick,
      arrow,
      classnames,
      pclassnames
    } = props
    return (
      <section className='flex flex-col relative py-12 lg:pb-20 px-12 lg:pl-32 items-center pt-8 px-8 overflow-hidden lg:items-start'>
        <section className={`items-center  flex h-2.65 w-11.18 lg:self-start lg:justify-start justify-center ${classnames}`}>
          <Paragraph classnames={`font-medium text-sm capitalize leading-5 ${pclassnames}`} >
            {subHeading}
          </Paragraph>
        </section>
        <h1 className='text-3_8XL font-bold leading-widen text-center lg:text-left text-white my-6'>
          {heading}
        </h1>
        {paragraph && (
          <Paragraph classnames='font-thin lg:font-light lg:text-left '>
            {paragraph}
          </Paragraph>
        )}
        <section className='flex flex-col flex-wrap lg:flex-row lg:flex-nowrap items-center justify-center lg:justify-start '>
          {leftButton && (
            <Button
              btnType='secondary'
              className='my-6'
              onClick={onLeftButtonClick}
            >
              {leftButtonText}
            </Button>
          )}
          {rightButton && (
            <Button
              btnType='ghost'
              className='text-secondary group hover:text-white hover:bg-transparent'
              onClick={onRightButtonClick}
            >
              {rightButtonText}
              <Arrow classnames='stroke-secondary group-hover:stroke-white' />
            </Button>
          )}
        </section>
        {arrow && (
          <div className='h-[40px] w-[40px] border border-dashed border-secondary rounded-full hidden lg:flex flex-row items-center justify-center self-end mt-24'>
            {' '}
            <Arrow classnames='rotate-[90deg] stroke-secondary ' />{' '}
          </div>
        )}
      </section>
    )
  }
  export default HeroLeft