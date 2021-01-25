import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'
import { Error, Form, Input, Title } from './styles'

export const UserForm = ({ title, error, onSubmit, loading }) => {
  const { values, handleChange } = useInputValue({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          placeholder='example@gmail.com'
          type='email'
          name='email'
          disabled={loading}
          value={values.email}
          onChange={handleChange}
        />
        <Input
          placeholder='*******'
          type='password'
          name='password'
          disabled={loading}
          value={values.password}
          onChange={handleChange}
        />
        <SubmitButton disabled={loading}>{title}</SubmitButton>
      </Form>
      <Error>{error?.message}</Error>
    </>
  )
}
