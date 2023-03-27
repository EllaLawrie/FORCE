type Props = {
  children: string
  classnames?: string
}

const Paragraph = ({ children, classnames, ...props }: Props) => {
  return (
    <p
      className={`text-base leading-wider font-normal text-center not-italic text-white ${classnames} ${props}`}
    >
      {children}
    </p>
  )
}

export default Paragraph
