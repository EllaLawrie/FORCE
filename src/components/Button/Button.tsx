import { IButtonProps, buttonApperanceType } from './BtnTypes'

const Button = ({
  children,
  className = '',
  btnType = 'primary',
  ...props
}: IButtonProps) => {
  let btnClasses: string[] | string = []
  if (btnType) btnClasses.push(buttonApperanceType[btnType])
  btnClasses.join(' ')

  return (
    <button
      className={`btn btn-wide text-primary font-medium leading-small text-md rounded normal-case w-54 h-11 min-h-[2.5rem] ${btnClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
