type Props = {
  classnames?: string
  children: React.ReactNode
}

const Spacer = ({ classnames, children }: Props) => {
  return (
    <section className={`lg:px-32 pt-24 pb-14 px-2 pt-8 ${classnames}`}>
      {children}
    </section>
  )
}

export default Spacer
