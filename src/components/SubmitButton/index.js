import { Button } from './styles'

export function SubmitButton({ children, onClick, rest }) {
  return (
    <Button {...rest} onClick={onClick}>
      {children}
    </Button>
  )
}
