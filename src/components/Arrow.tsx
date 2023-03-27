type Props = {
classnames?:string
}

export default function Arrow({classnames}: Props) {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`mx-2 ${classnames}`}
    >
      <path
        d='M12.0254 5.67188L17.0837 10.7302L12.0254 15.7885'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.91699 10.7305H16.942'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
