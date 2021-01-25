import { SubmitButton } from '../components/SubmitButton'
import { useOscloudgram } from '../Context'
export function User() {
  const { removeAuth } = useOscloudgram()

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
