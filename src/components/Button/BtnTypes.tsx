import { ReactNode } from 'react'

export interface IButtonProps {
  children: ReactNode
  className?: string
  btnType?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost'
    | 'success'
    | 'error'
    | 'link'
  onClick?: any
}

export let buttonApperanceType = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
  success: 'btn-success',
  error: 'btn-error',
  link: 'btn-link',
}
