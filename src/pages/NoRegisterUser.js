import { gql, useMutation } from '@apollo/client'
import { UserForm } from '../components/UserForm/index'
import { useOscloudgram } from '../Context'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export function NoRegisterUser() {
  const { activeAuth } = useOscloudgram()

  const [
    registerMutation,
    { loading: loadingRegister, error: errorRegister },
  ] = useMutation(REGISTER)

  const [loginMutation, { loading, error }] = useMutation(LOGIN)

  const onRegisterSubmit = async ({ email, password }) => {
    try {
      const { data } = await registerMutation({
        variables: { input: { email, password } },
      })
      const { signup } = data

      activeAuth(signup)
    } catch (error) {
      console.error(error)
    }
  }

  const onLoginSubmit = async ({ email, password }) => {
    try {
      const { data } = await loginMutation({
        variables: { input: { email, password } },
      })
      const { login } = data
      activeAuth(login)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <UserForm
        error={errorRegister}
        onSubmit={onRegisterSubmit}
        loading={loadingRegister}
        title='Registrarse'
      />
      <UserForm
        error={error}
        onSubmit={onLoginSubmit}
        loading={loading}
        title='Iniciar sesión'
      />
    </>
  )
}
