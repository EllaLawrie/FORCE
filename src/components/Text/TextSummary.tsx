import React from 'react'

type Props = {
  top?: String | React.ReactNode
  header: string
  header2?: string
  paragraph: string
  paragraph2?: string
  bottom?: React.ReactNode
  pStyles?: string
  hStyles?: string
  containerStyles?: any
}

const TextSummary = ({
  top,
  header,
  header2,
  paragraph,
  paragraph2,
  bottom,
  pStyles,
  hStyles,
  containerStyles,
}: Props) => {
  return (
    <section className={`flex  items-center flex-col  ${containerStyles}`}>
      {top}
      <h2
        className={`font-bold text-2xl text-center text-primary not-italic mt-3 leading-9_5 ${hStyles}`}
      >
        {header}
      </h2>
      <h2
        className={`lg:text-3_8XL lg:leading-widen font-bold text-2xl text-center text-primary not-italic mt-3 leading-9_5 ${hStyles}`}
      >
        {header2}
      </h2>
      <p
        className={`text-base font-thin lg:font-extralight text-center text-lightBlue my-6 leading-wider ${pStyles} lg:my-3`}
      >
        {paragraph}
      </p>
      <p
        className={`text-base font-thin lg:font-extralight text-center text-lightBlue my-6 leading-wider ${pStyles} lg:my-3`}
      >
        {paragraph2}
      </p>
      {bottom}
    </section>
  )
}

export { TextSummary }
